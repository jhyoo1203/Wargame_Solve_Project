import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Categories from "./categories";
import ProblemInfo from "./problem_info";
import Rank from "./rank";

const Wargame = () => { 
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <div className="flex justify-center">
                <div className="max-w-[800px]">
                    <Categories />
                    <div className="mt-5 w-full border-t-2 border-slate-300"></div>
                    <ProblemInfo />
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
                    <Rank />
                </div>
            </div>
        </div>
    );
}
export default Wargame;