import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Rank = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div>
            <div className="flex justify-center items-center h-screen bg-blue-200">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Welcome to Team 0100!</h1>
                    <p className="text-xl mt-3">This is the Ranking of Team 0100's web application.</p>
                </div>
            </div>
        </div>
    );
}
export default Rank;