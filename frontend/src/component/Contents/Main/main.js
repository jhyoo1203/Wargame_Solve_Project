import React from "react";

import ImageSwiper from "./image_swiper";

const Main = () => {
    const linkTexts = ["워게임 시작하기 >", "랭킹 확인하러 가기 >", "커뮤니티로 소통하기 >"];
    return (
        <>
            <ImageSwiper />
            <div className="mt-10 text-lg font-bold">
                <p className="text-3xl text-center">Welcome to WargameSolve!</p>
                <p className="text-center mt-3">WargameSolve는 다양한 분야의 문제를 풀며 보안에 대한 이해를 높이는 웹사이트입니다.</p>
            </div>
            <div className="flex justify-center items-center my-10">
                <div className="w-72 h-72 mx-10 rounded-lg shadow-md hover:shadow-lg border-2 border-gray-400">
                    <p className="text-3xl text-center py-10 font-bold bg-purple-200">워게임</p>
                    <p className="text-left mt-3 p-5 font-bold">다양한 분야의 문제를 풀며 보안에 대한 이해를 높이세요.</p>
                    <p className="text-left p-5 font-bold text-blue-600 hover:cursor-pointer">{linkTexts[0]}</p>
                </div>
                <div className="w-72 h-72 mx-10 rounded-lg shadow-md hover:shadow-lg border-2 border-gray-400">
                    <p className="text-3xl text-center py-10 font-bold bg-yellow-200">랭킹</p>
                    <p className="text-left mt-3 p-5 font-bold">다른 유저들과 경쟁하며 랭킹을 올리세요.</p>
                    <p className="text-left p-5 font-bold text-blue-600 hover:cursor-pointer">{linkTexts[1]}</p>
                </div>
                <div className="w-72 h-72 mx-10 rounded-lg shadow-md hover:shadow-lg border-2 border-gray-400">
                    <p className="text-3xl text-center py-10 font-bold bg-blue-100">커뮤니티</p>
                    <p className="text-left mt-3 p-5 font-bold">다른 유저들과 정보를 공유하며 소통하세요.</p>
                    <p className="text-left p-5 font-bold text-blue-600 hover:cursor-pointer">{linkTexts[2]}</p>
                </div>
            </div>
        </>
    );
}
export default Main;