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
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">{problem.title}</h1>
                    <p className="text-xl mt-3">{problem.field}</p>
                </div>
            </div>
        </div>
    );
};

export default ProblemDetail;