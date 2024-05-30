import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSignup = () => {
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        axios.post('http://localhost:8080/users/signup', {
            name: name,
            nickname: nickname,
            username: username,
            password: password,
            email: email
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
            <div className="w-96 p-10 bg-white rounded-lg shadow-lg">
                <h1 className="text-center text-2xl font-bold m-8">회원가입</h1>

                <div className="mb-6 relative flex flex-col items-center">
                    <label>
                        <input
                            type="text"
                            name="name"
                            onChange={e => setName(e.target.value)}
                            className={`mt-1 px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 sm:text-sm focus:ring-1 rounded-lg`}
                            placeholder="이름을 입력해주세요."
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="nickname"
                            onChange={e => setNickname(e.target.value)}
                            className={`mt-5 px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 sm:text-sm focus:ring-1 rounded-lg`}
                            placeholder="닉네임을 입력해주세요."
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="username"
                            onChange={e => setUsername(e.target.value)}
                            className={`mt-5 px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 sm:text-sm focus:ring-1 rounded-lg`}
                            placeholder="아이디를 입력해주세요."
                        />
                    </label>
                    <label>
                    <label>
                        <input
                            type="email"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            className={`mt-5 px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 sm:text-sm focus:ring-1 rounded-lg`}
                            placeholder="이메일을 입력해주세요."
                        />
                    </label>
                        <input
                            type="password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            className={`mt-5 px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 sm:text-sm focus:ring-1 rounded-lg`}
                            placeholder="비밀번호를 입력해주세요."
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={e => setConfirmPassword(e.target.value)}
                            className={`mt-5 px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 sm:text-sm focus:ring-1 rounded-lg`}
                            placeholder="비밀번호를 확인해주세요."
                        />
                    </label>

                    <button
                        onClick={handleSignup}
                        className="w-full py-5 mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full transition-all"
                    >
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;