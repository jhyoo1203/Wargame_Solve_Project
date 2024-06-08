import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from 'api';
import { saveAs } from 'file-saver';

const ProblemDetail = () => {
    const { problemId } = useParams();
    const [problem, setProblem] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [result, setResult] = useState('');
    
    useEffect(() => {
        apiClient.get(`/problems/${problemId}`).then((response) => {
            setProblem(response.data);
        });
    }, [problemId]);

    const handleFileDownload = (problem) => {
        apiClient({
            url: `/problems/download/${problem}`,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            saveAs(new Blob([response.data]), problem);
        });
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userAnswer === problem.answer) {
            setResult('맞았습니다!');
        } else {
            setResult('틀렸습니다!');
        }
    }

    const handleAnswerChange = (event) => {
        setUserAnswer(event.target.value);
    }
    
    const getFileName = (filePath) => {
        return filePath.split('\\').pop();
    }    

    if (!problem) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex px-32 py-10 justify-center'>
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
                <div className="mt-5">
                    첨부파일: 
                    <button onClick={() => handleFileDownload(getFileName(problem.filePath))} className='text-blue-600 hover:underline'>
                        {getFileName(problem.filePath)}
                    </button>
                </div>
            </div>
            <div className='mx-10 border-2 border-gray-300'></div>
            <form onSubmit={handleSubmit} className='flex px-32 py-10 justify-center'>
                <div className='flex flex-col'>
                    <input type='text' value={userAnswer} onChange={handleAnswerChange} className='w-96 p-3 h-10 border-2 border-gray-300 rounded-lg' placeholder='답안을 입력하세요.' />
                    <button className='w-96 h-10 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg'>제출</button>
                    <div className={`mt-2 text-xl font-bold text-center ${result==="맞았습니다!" ? "text-blue-500" : "text-red-500"}`}>{result}</div>
                </div>
            </form>
        </div>
    );
};

export default ProblemDetail;