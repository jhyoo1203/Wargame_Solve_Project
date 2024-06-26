import React, { useEffect } from "react";
import apiClient from "api";

const Rank = () => {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        apiClient.get("/users/all").then((response) => {
            setUsers(response.data);
        });
    }, []);

    return (
        <>
            <div className="mt-12 font-bold text-xl">
                워게임 TOP 10
            </div>
            <div className="mt-5 mb-5">
                {users.sort((a, b) => b.score - a.score).slice(0, 10).map((user, index) => (
                    <div key={index} className="flex justify-between mt-3 items-center">
                        <div className="flex items-center">
                            <div className="mr-3 font-bold">{index + 1}위</div>
                            <div className="mt-2 w-8 h-8">
                                <img src={user.iconUrl} alt="icon" className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="ml-3 font-bold">{user.nickname}</div>
                                <div className="ml-3 text-blue-600">{user.achievement}</div>
                            </div>
                        </div>
                        <div className="ml-3 mt-2">{user.score}점</div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Rank;