import React from "react";
import ImageSwiper from "./image_swiper";

const Main = () => {
    const cards = [
        {
            title: "워게임",
            color: "bg-purple-200",
            description: "다양한 분야의 문제를 풀며 보안에 대한 이해를 높이세요.",
            linkText: "워게임 시작하기 >"
        },
        {
            title: "랭킹",
            color: "bg-yellow-200",
            description: "다른 유저들과 경쟁하며 랭킹을 올리세요.",
            linkText: "랭킹 확인하러 가기 >"
        },
        {
            title: "커뮤니티",
            color: "bg-blue-100",
            description: "다른 유저들과 정보를 공유하며 소통하세요.",
            linkText: "커뮤니티로 소통하기 >"
        }
    ];

    return (
        <>
            <ImageSwiper />
            <div className="mt-10 text-lg font-bold">
                <p className="text-3xl text-center">Welcome to WargameSolve!</p>
                <p className="text-center mt-3">WargameSolve는 다양한 분야의 문제를 풀며 보안에 대한 이해를 높이는 웹사이트입니다.</p>
            </div>
            <div className="flex justify-center items-center my-10">
                {cards.map((card, index) => (
                    <div key={index} className="w-72 h-72 mx-10 rounded-lg shadow-md hover:shadow-lg border-2 border-gray-400">
                        <p className={`text-3xl text-center py-10 font-bold ${card.color}`}>{card.title}</p>
                        <p className="text-left mt-3 p-5 font-bold">{card.description}</p>
                        <p className="text-left p-5 font-bold text-blue-600 hover:cursor-pointer">{card.linkText}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Main;