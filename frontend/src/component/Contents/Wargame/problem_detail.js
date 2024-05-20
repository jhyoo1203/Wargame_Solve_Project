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

    if (!problem) {
        return <div>Loading...</div>;
    }

    return (
        <div className='px-20 py-10'>
            <div className="mt-5">
                <div className="text-2xl font-bold">{problem.title}</div>
                <div className="mt-5">출제자: {problem.creatorNickname}</div>
                <div className="mt-5">출제 분야: {problem.field}</div>
                <div className="mt-5">출제 난이도: {problem.level}</div>
                <div className="mt-5">풀이 수: {problem.solutionsCount}</div>
                <div className="mt-5">문제 내용: {problem.content}</div>
                <div className="mt-5">힌트: {problem.hint}</div>
            </div>
        </div>
    );
};

export default ProblemDetail;