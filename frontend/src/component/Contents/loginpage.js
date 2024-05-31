import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Google from 'image/Google.png';

const LoginPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateUsername = (username) => {
    return username.length >= 3;
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = () => {
    const newErrors = {};

    if (!validateUsername(username)) {
      newErrors.username = '올바른 이름을 입력해주세요.';
    }

    if (!validatePassword(password)) {
      newErrors.password = '비밀번호가 틀렸습니다.';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    axios
      .post('http://localhost:8080/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setUsername('');
        setPassword('');
    
        alert('로그인 성공');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert('로그인 실패');
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <div className="w-96 p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold m-8">로그인</h1>

        <div className="mb-6 relative">
          <label>
            <input
              type="text"
              name="username"
              className={`mt-1 px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 rounded-lg ${
                errors.username ? 'border-red-500' : ''
              }`}
              placeholder="아이디를 입력해주세요."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </label>
        </div>

        <div className="mb-6 relative">
          <label>
            <input
              type="password"
              name="password"
              className={`mt-1 px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1 rounded-lg ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </label>
        </div>

        <div className="mb-6 relative flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm">자동로그인</label>
          </div>
          <span className="text-blue-600 text-sm hover:cursor-pointer hover:underline">
            비밀번호 찾기
          </span>
        </div>

        <button
          className="w-full py-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full transition-all"
          onClick={handleLogin}
        >
          로그인
        </button>

        <div className="mt-2 relative">
          <button
            className="flex justify-center items-center w-full py-5 bg-white border border-slate-200 text-slate-700 font-bold rounded-full transition-all "
            onClick={handleLogin}
          >
         <img
          src={Google} alt="Google" className=" w-5 h-5"
          />
          <span className="mr-1"> </span>
            Google로 로그인
           
          </button>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-700">
        <span>WargameSolve가 처음이신가요? </span>
        <Link to="/signup" className="text-blue-600 hover:underline">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
