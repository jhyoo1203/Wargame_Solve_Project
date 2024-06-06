import React, { Fragment } from "react";
import users from "./users";

const Userinformation = () => {
    return (
        <Fragment>
            <div className="container divide-y">
                <div className="search-bar flex divide-x">
                    <div className="justify-start flex">
                        <select name="season">
                            <option value="">Season 1</option>
                            <option value="">Season 2</option>
                            <option value="">Season 3</option>
                            <option value="">Season 4</option>
                            <option value="">Season 5</option>
                        </select>
                        <select name="country">
                            <option value="">Korea</option>
                            <option value="">India</option>
                        </select>
                    </div>
                    <div className="ML-96 flex">
                        <input type="text" placeholder="유저 닉네임 검색"/>
                    </div>
                </div>
                <div>
                    <table style={{ width: '100%', textAlign: 'center' }}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>유저정보</th>
                            <th>RATING</th>
                            <th>참여 CTF 수</th>
                            <th>국가</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.sort((a, b) => b.point - a.point).map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}위</td>
                            <td>{user.nickname}</td>
                            <td>{user.RATING}</td>
                            <td>{user.CTF}</td>
                            <td>{user.country}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </Fragment>
            );
        };

export default Userinformation;