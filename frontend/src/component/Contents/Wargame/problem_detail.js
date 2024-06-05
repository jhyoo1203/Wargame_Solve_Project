import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProblemDetail = () => {
    const { problemId } = useParams();
    const [problem, setProblem] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:8080/problems/${problemId}`).then((response) => {
            setProblem(response.data);
        });
    }, [problemId]);

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

    if (!problem) {
        return <div>Loading...</div>;
    }

    return (
        <div className='px-32 py-10'>
            <div className="mt-5 text-lg">
                <div className="flex">
                    <div className={`w-5 px-1 text-center rounded-lg text-white ${getBgColor(problem.level)}`}>{problem.level}</div>
                    <div className="w-44 ml-2 font-bold hover:cursor-pointer hover:underline">{problem.title}</div>
                </div>
                <div className="mt-12 flex">출제자: <img src={`${problem.creatorIconUrl}`} alt='icon' className='ml-2 mr-1 w-8 h-8' />{problem.creatorNickname}</div>
                <div className="mt-5">출제 분야: {problem.field}</div>
                <div className="mt-5">출제 난이도: {problem.level}</div>
                <div className="mt-5">풀이 수: {problem.solutionsCount}</div>
                <div className='mt-5'>문제 URL: <a href={`${problem.problemUrl}`} className='text-blue-600 hover:underline'>{problem.problemUrl}</a></div>
                <div className="mt-5">문제 설명</div>
                <div className="mt-2">{problem.description}</div>
            </div>
        </div>
    );
};

export default ProblemDetail;