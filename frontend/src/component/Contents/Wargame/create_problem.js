import React, { useState, useEffect } from "react";
import apiClient from "api";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateProblem = () => {
    const levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const fields = ["시스템 해킹", "리버싱", "웹해킹", "암호학", "포렌식", "클라우드", "Web3", "기타"];
    const [file, setFile] = useState(null);

    const { user } = useSelector(state => state.user);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [selectedLevel, setSelectedLevel] = useState(levels[0]);
    const [selectedField, setSelectedField] = useState(fields[0]);
    const [answer, setAnswer] = useState('');

    const getLevelColor = (level, isSelected) => {
        if (level === "모든 난이도") return isSelected ? 'border-blue-400 text-blue-400' : 'border-gray-400 text-gray-400';
        const levelNum = parseInt(level);
        if (levelNum >= 1 && levelNum <= 3) return isSelected ? 'bg-green-400 text-white shadow-md' : 'bg-green-100 text-white border-white';
        if (levelNum >= 4 && levelNum <= 6) return isSelected ? 'bg-blue-400 text-white shadow-md' : 'bg-blue-100 text-white border-white';
        if (levelNum >= 7 && levelNum <= 8) return isSelected ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-300 text-white border-white';
        if (levelNum >= 9 && levelNum <= 10) return isSelected ? 'bg-red-600 text-white shadow-md' : 'bg-red-300 text-white border-white';
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!title || !description || !answer || (["시스템 해킹", "리버싱", "암호학", "포렌식", "기타"].includes(selectedField) && !file)) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
    
        const problem = {
            title,
            description,
            level: selectedLevel,
            field: selectedField,
            creatorNickname: user.nickname,
            answer,
            problemUrl: url
        };
    
        const formData = new FormData();
        formData.append("problem", JSON.stringify(problem));
        if (file) {
            formData.append('file', file);
        }
    
        try {
            const response = await apiClient.post('/problems/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            console.log(response.data);
    
            alert("문제가 성공적으로 출제되었습니다.");
            navigate('/wargame');
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 py-20">
                <div className="w-96 p-10 bg-white rounded-lg shadow-lg">
                    <div className="mb-6 relative flex flex-col items-center">
                        <div className="text-2xl font-bold">문제 출제하기</div>
                        <div className="flex mt-10">
                            <p className="mt-1 font-bold text-lg text-black w-12">제목</p>
                            <label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={e => setTitle(e.target.value)}
                                    className={`px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[253px] sm:text-sm focus:ring-1 rounded-lg`}
                                    placeholder="문제 제목을 입력해주세요."
                                />
                            </label>
                        </div>
                        <div className="flex mt-5">
                            <p className="mt-5 font-bold text-lg text-black w-24">난이도</p>
                            <div className="flex flex-wrap justify-center">
                                {levels.map((level, index) => (
                                    <div key={index} 
                                        className={`mt-2 ml-3 hover:cursor-pointer border-2 px-2 rounded-xl hover:border-blue-600 ${getLevelColor(level, level === selectedLevel)} ${level === selectedLevel ? getLevelColor(level, true) : 'border-gray-400 text-gray-400'}`}
                                        onClick={() => setSelectedLevel(level)}>
                                        {level}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <p className="mt-10 font-bold text-lg text-black w-24">분야</p>
                            <div className="flex flex-wrap justify-center">
                                {fields.map((field, index) => (
                                    <div key={index} 
                                            className={`mt-2 ml-3 hover:cursor-pointer border-2 px-2 rounded-xl hover:border-blue-600 ${field === selectedField ? 'border-blue-400 text-blue-400' : 'border-gray-400 text-gray-400'}`}
                                            onClick={() => setSelectedField(field)}>
                                        {field}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {["시스템 해킹", "리버싱", "암호학", "포렌식", "기타"].includes(selectedField) && (
                            <div className="flex mt-10">
                                <p className="mt-1 font-bold text-lg text-black w-12">파일</p>
                                <label>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className={`px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[253px] sm:text-sm focus:ring-1 rounded-lg`}
                                    />
                                </label>
                            </div>
                        )}
                        {!["시스템 해킹", "리버싱", "암호학", "포렌식", "기타"].includes(selectedField) && (
                            <div className="flex mt-10">
                                <p className="mt-1 font-bold text-lg text-black w-12">URL</p>
                                <input
                                    type="text"
                                    onChange={e => setUrl(e.target.value)}
                                    className={`px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[253px] sm:text-sm focus:ring-1 rounded-lg`}
                                />
                            </div>
                        )}
                        <div className="flex mt-10">
                            <p className="mt-1 font-bold text-lg text-black w-12">설명</p>
                            <label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={e => setDescription(e.target.value)}
                                    className={`px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[253px] sm:text-sm focus:ring-1 rounded-lg`}
                                    placeholder="문제 설명을 입력해주세요."
                                />
                            </label>
                        </div>
                        <div className="flex mt-10">
                            <p className="mt-1 font-bold text-lg text-black w-12">정답</p>
                            <label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={e => setAnswer(e.target.value)}
                                    className={`px-3 py-2 bg-white border focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[253px] sm:text-sm focus:ring-1 rounded-lg`}
                                    placeholder="문제 정답을 입력해주세요."
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-5 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full transition-all"
                        >
                            문제 출제하기
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default CreateProblem;
