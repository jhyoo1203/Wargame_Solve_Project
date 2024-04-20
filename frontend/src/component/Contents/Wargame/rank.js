import React from "react";

import users from "./users";

const Rank = () => {
    return (
        <div className="mt-5">
            {users.sort((a, b) => b.point - a.point).map((user, index) => (
                <div key={index} className="flex justify-between mt-3 items-center">
                    <div className="flex items-center">
                        <div className="mr-3 font-bold">{index + 1}위</div>
                        <div className="mt-2 w-8 h-8">
                            <img src={user.iconURL} alt="icon" className="w-8 h-8" />
                        </div>
                        <div>
                            <div className="ml-3 font-bold">{user.nickname}</div>
                            <div className="ml-3 text-blue-600">{user.achieve}</div>
                        </div>
                    </div>
                    <div className="ml-3 mt-2">{user.point}점</div>
                </div>
            ))}
        </div>
    )
}
export default Rank;