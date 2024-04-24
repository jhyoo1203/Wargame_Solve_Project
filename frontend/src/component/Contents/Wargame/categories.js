import React, { useState } from "react";

const Categories = () => {
    const branches = ["모든 분야", "시스템 해킹", "리버싱", "웹해킹", "암호학", "포렌식", "클라우드", "Web3", "기타"];
    const levels = ["모든 난이도", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const isSolvedes = ["모든 상태", "TODO", "시도한 문제", "푼 문제"];

    const [selectedBranch, setSelectedBranch] = useState(branches[0]);
    const [selectedLevel, setSelectedLevel] = useState(levels[0]);
    const [selectedIsSolved, setSelectedIsSolved] = useState(isSolvedes[0]);

    const getLevelColor = (level, isSelected) => {
        if (level === "모든 난이도") return isSelected ? 'border-blue-400 text-blue-400' : 'border-gray-400 text-gray-400';
        const levelNum = parseInt(level);
        if (levelNum >= 1 && levelNum <= 3) return isSelected ? 'bg-green-400 text-white shadow-md' : 'bg-green-100 text-white border-white';
        if (levelNum >= 4 && levelNum <= 6) return isSelected ? 'bg-blue-400 text-white shadow-md' : 'bg-blue-100 text-white border-white';
        if (levelNum >= 7 && levelNum <= 8) return isSelected ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-300 text-white border-white';
        if (levelNum >= 9 && levelNum <= 10) return isSelected ? 'bg-red-600 text-white shadow-md' : 'bg-red-300 text-white border-white';
    }

    return (
        <>
            <div className="flex mt-7">
                <input placeholder="찾고 싶은 문제를 검색하세요." className="p-3 w-[500px] border-2 border-slate-300 rounded-lg" />
                <div className="p-3 ml-3 rounded-lg bg-blue-600 text-white hover:cursor-pointer">
                    검색
                </div>
            </div>
            <div className="flex mt-5 text-lg text-gray-400">
                <p className="mt-2 font-bold mr-6 text-black w-20">분야</p>
                <div className="flex flex-wrap">
                    {branches.map((branch, index) => (
                        <div key={index} 
                                className={`mt-2 ml-3 hover:cursor-pointer border-2 px-2 rounded-xl hover:border-blue-600 ${branch === selectedBranch ? 'border-blue-400 text-blue-400' : 'border-gray-400 text-gray-400'}`}
                                onClick={() => setSelectedBranch(branch)}>
                            {branch}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mt-5 text-lg text-gray-400">
                <p className="mt-2 font-bold mr-3 text-black w-20">난이도</p>
                <div className="flex flex-wrap">
                {levels.map((level, index) => (
                    <div key={index} 
                        className={`mt-2 ml-3 hover:cursor-pointer border-2 px-2 rounded-xl hover:border-blue-600 ${getLevelColor(level, level === selectedLevel)} ${level === selectedLevel ? getLevelColor(level, true) : 'border-gray-400 text-gray-400'}`}
                        onClick={() => setSelectedLevel(level)}>
                        {level}
                    </div>
                ))}
                </div>
            </div>
            <div className="flex mt-5 text-lg text-gray-400">
                <p className="mt-2 font-bold mr-3 text-black w-20">풀이 여부</p>
                <div className="flex flex-wrap">
                    {isSolvedes.map((isSolved, index) => (
                        <div key={index} 
                                className={`mt-2 ml-3 hover:cursor-pointer border-2 px-2 rounded-xl hover:border-blue-600 ${isSolved === selectedIsSolved ? 'border-blue-400 text-blue-400' : 'border-gray-400 text-gray-400'}`}
                                onClick={() => setSelectedIsSolved(isSolved)}>
                            {isSolved}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Categories;