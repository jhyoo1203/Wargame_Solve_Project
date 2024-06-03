import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const ProblemInfo = () => {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/problems/all").then((response) => {
            setProblems(response.data);
        });
    }, []);

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
    
    return(
        <div className="mb-10">
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
                <div className="flex w-full mt-3">
                    <Link to={`/problems/${problem.problemId}`} key={index}>
                        <div className="flex">
                            <div className={`w-5 px-1 text-center rounded-lg text-white ${getBgColor(problem.level)}`}>{problem.level}</div>
                            <div className="w-40 ml-2 font-bold hover:cursor-pointer hover:underline">{problem.title}</div>
                        </div>
                    </Link>
                    <div className="w-40 ml-[50px]">{problem.field}</div>
                    <div className="w-20 ml-[50px]">{problem.solutionsCount}</div>
                    <div className="flex">
                        <img src={problem.creatorIconUrl} alt="icon" className="w-6 h-6 ml-[50px]" />
                        <div className="ml-2 font-bold">{problem.creatorNickname}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
export default ProblemInfo;