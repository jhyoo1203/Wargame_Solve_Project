package com.jhyoo.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.context.DelegatingSecurityContextRepository;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.RequestAttributeSecurityContextRepository;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.jhyoo.backend.authentication.CustomAuthenticationSuccessHandler;
import com.jhyoo.backend.authentication.CustomAuthenticationFailureHandler;
import com.jhyoo.backend.authentication.CustomAuthenticationFilter;
import com.jhyoo.backend.authentication.CustomLoginAuthenticationEntrypoint;
import com.jhyoo.backend.authentication.CustomAccessDeniedHander;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
        private final UserDetailsService userDetailsService;
        private final CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;
        private final CustomAuthenticationFailureHandler customAuthenticationFailureHandler;
        private final CustomLoginAuthenticationEntrypoint authenticationEntryPoint;
        private final AuthenticationConfiguration authenticationConfiguration;
        private final CustomAccessDeniedHander accessDeniedHandler;

        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
                auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
        }

        @Bean
        SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
                http
                        .authorizeRequests((authorize) -> authorize
                                .requestMatchers("/login", "/users/signup").permitAll()
                                .anyRequest().authenticated())
                        .formLogin((formLogin) -> formLogin
                                .loginPage("/login")
                                .loginProcessingUrl("/login")
                                .defaultSuccessUrl("/success", true)
                                .failureUrl("/login?error=true")
                                .permitAll())
                        .logout((logout) -> logout
                                .logoutUrl("/logout")
                                .logoutSuccessUrl("/login")
                                .permitAll())
                        .csrf((csrf) -> csrf
                                .ignoringRequestMatchers(new AntPathRequestMatcher("/h2-console/**"),
                                        new AntPathRequestMatcher("/users/signup")))
                        .headers((headers) -> headers
                                .addHeaderWriter(new XFrameOptionsHeaderWriter(
                                        XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN)))
                        .exceptionHandling(config -> config
                                .authenticationEntryPoint(authenticationEntryPoint)
                                .accessDeniedHandler(accessDeniedHandler))
                ;
                return http.build();
        }

        @Bean
        PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

        @Bean
        CustomAuthenticationFilter ajaxAuthenticationFilter() throws Exception {
                CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter();
                customAuthenticationFilter.setAuthenticationManager(authenticationManager());
                customAuthenticationFilter.setAuthenticationSuccessHandler(customAuthenticationSuccessHandler);
                customAuthenticationFilter.setAuthenticationFailureHandler(customAuthenticationFailureHandler);

                customAuthenticationFilter.setSecurityContextRepository(
                        new DelegatingSecurityContextRepository(
                                new RequestAttributeSecurityContextRepository(),
                                new HttpSessionSecurityContextRepository()
                        ));

                return customAuthenticationFilter;
        }

        @Bean
        AuthenticationManager authenticationManager() throws Exception {
                return authenticationConfiguration.getAuthenticationManager();
        }

}