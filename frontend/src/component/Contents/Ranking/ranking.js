import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Category from "./category";
import Topuser from "./top_user";
import Userinformation from "./user_information";

const Rank = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div>
            <div className="flex justify-center">
                <div className="max-w-[30%]">
                    <Category />
                </div>
                <div className="max-w-[70%]">
                    <Topuser />
                    <Userinformation />
                </div>
            </div>
        </div>
    );
}
export default Rank;