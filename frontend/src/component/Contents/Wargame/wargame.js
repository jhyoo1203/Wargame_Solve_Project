import React, { useState } from "react";

const Wargame = () => {
    const branches = ["모든 분야", "시스템 해킹", "리버싱", "웹해킹", "암호학", "포렌식", "클라우드", "Web3", "기타"];
    const levels = ["모든 난이도", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const isSolvedes = ["모든 상태", "TODO", "시도한 문제", "푼 문제"];

    const problems = [
        {
            problemId: 1,
            level: 2,
            title: "iRSA",
            field: "crypto",
            answer_num: 9,
            questioner: "r_jh0213",
            iconURL: "https://www.acmicpc.net/favicon.ico"
        },
        {
            problemId: 2,
            level: 3,
            title: "Dream Zoo",
            field: "forensics",
            answer_num: 12,
            questioner: "전해킹에소질이...",
            iconURL: "https://www.acmicpc.net/favicon.ico"
        },
        {
            problemId: 3,
            level: 3,
            title: "EZ_command_injection",
            field: "web",
            answer_num: 47,
            questioner: "Burnnnnny",
            iconURL: "https://www.acmicpc.net/favicon.ico"
        },
        {
            problemId: 4,
            level: 5,
            title: "Exponentiation",
            field: "crypto",
            answer_num: 12,
            questioner: "Dreamhack",
            iconURL: "https://www.acmicpc.net/favicon.ico"
        },
        {
            problemId: 5,
            level: 5,
            title: "ERC1337",
            field: "web3",
            answer_num: 5,
            questioner: "Dreamhack",
            iconURL: "https://www.acmicpc.net/favicon.ico"
        },
        {
            problemId: 6,
            level: 3,
            title: "ptrace_block",
            field: "reversing",
            answer_num: 36,
            questioner: "Dreamhack",
            iconURL: "https://www.acmicpc.net/favicon.ico"
        }
    ];

    const users = [
        {
            userId: 1,
            point: 26160,
            nickname: "Reinose",
            achieve: "워게임:20",
            iconURL: "https://www.acmicpc.net/favicon.ico",
        },
        {
            userId: 2,
            point: 22973,
            nickname: "Sechack",
            achieve: "CTF First Place",
            iconURL: "https://www.acmicpc.net/favicon.ico",
        },
        {
            userId: 3,
            point: 24659,
            nickname: "G0RiyA",
            achieve: "Dreamhack Beta CTF 2위",
            iconURL: "https://www.acmicpc.net/favicon.ico",
        },
        {
            userId: 4,
            point: 20391,
            nickname: "Cronus",
            achieve: "워게임 고인물",
            iconURL: "https://www.acmicpc.net/favicon.ico",
        },
        {
            userId: 5,
            point: 24621,
            nickname: "ainsetin",
            achieve: "Open Beta Tester",
            iconURL: "https://www.acmicpc.net/favicon.ico",
        },
        {
            userId: 6,
            point: 22438,
            nickname: "snwo",
            achieve: "CTF First Place",
            iconURL: "https://www.acmicpc.net/favicon.ico",
        },
        {
            userId: 7,
            point: 19779,
            nickname: "2dedce",
            achieve: "워게임 고인물",
            iconURL: "https://www.acmicpc.net/favicon.ico",
        }
    ];
    

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

    const getBgColor = (level) => {
        if (level >= 1 && level <= 3) {
          return 'bg-green-400';
        } else if (level >= 4 && level <= 6) {
          return 'bg-blue-400';
        } else if (level >= 7 && level <= 8) {
          return 'bg-blue-600';
        } else if (level >= 9 && level <= 10) {
          return 'bg-red-600';
        }
      }
    
    return (
        <div>
            <div className="flex justify-center h-screen">
                <div className="max-w-[800px]">
                    <div className="flex mt-7">
                        <input placeholder="찾고 싶은 문제를 검색하세요." className="p-3 w-[500px] border-2 border-slate-300 rounded-lg" />
                        <div className="p-3 ml-3 rounded-lg bg-blue-600 text-white hover:cursor-pointer hover:shadow-md">
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
                    <div className="mt-5 w-full border-t-2 border-slate-300"></div>
                    <div className="">
                        <div>
                            <div className="flex mt-5 text-lg font-bold">총<div className="text-blue-600 ml-1.5"> {problems.length}개</div>의 문제가 있습니다.</div>
                            <div className="flex mt-1 text-lg font-bold">
                                <div className="mr-40">문제 정보</div>
                                <div className="mr-40">분야</div>
                                <div className="mr-20">풀이 수</div>
                                <div className="">출제자</div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {problems.map((problem, index) => (
                                <div key={index} className="flex w-full mt-3">
                                    <div className={`w-5 px-1 text-center rounded-lg text-white ${getBgColor(problem.level)}`}>{problem.level}</div>
                                    <div className="w-40 ml-2 font-bold hover:cursor-pointer hover:underline">{problem.title}</div>
                                    <div className="w-40 ml-[50px]">{problem.field}</div>
                                    <div className="w-20 ml-[38px]">{problem.answer_num}</div>
                                    <div className="flex">
                                        <img src={problem.iconURL} alt="icon" className="w-6 h-6 ml-[55px]" />
                                        <div className="ml-2 font-bold">{problem.questioner}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[400px] ml-5">
                    <div className="mt-7 p-5 bg-blue-50 rounded-lg border-2 border-blue-300 font-bold">
                        <div>
                            기발한 아이디어가 있으신가요?
                        </div>
                        <div>
                            여러분들의 멋진 문제를 공개해주세요!
                        </div>
                        <div className="w-40 mt-3 text-blue-600 hover:cursor-pointer underline">
                            워게임 문제 출제하기
                        </div>
                    </div>
                    <div className="mt-12 font-bold text-xl">
                        워게임 TOP 10
                    </div>
                    <div className="mt-5">
                        {users.map((user, index) => (
                            <div key={index} className="flex mt-3">
                                <div className="w-8 h-8">
                                    <img src={user.iconURL} alt="icon" className="w-8 h-8" />
                                </div>
                                <div className="ml-3 font-bold">{user.nickname}</div>
                                <div className="ml-3">{user.point}점</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Wargame;