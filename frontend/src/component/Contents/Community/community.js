import React, { useState } from "react";

const Community = () => {
    const categories = ["HOME", "인기글🔥", "Q&A", "자유게시판", "이직 • 커리어", "정보 • 테크", "스터디 • 팀원", "대회 • 행사 홍보"];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedContent, setSelectedContent] = useState("커뮤니티");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        switch(category) {
            case "HOME":
                setSelectedContent("커뮤니티");
                break;
            case "인기글🔥":
                setSelectedContent("인기글을 확인해보세요!");
                break;
            case "Q&A":
                setSelectedContent("질문과 답변을 확인해보세요!");
                break;
            case "자유게시판":
                setSelectedContent("자유롭게 글을 작성해보세요!");
                break;
            case "이직 • 커리어":
                setSelectedContent("이직과 커리어 정보를 확인해보세요!");
                break;
            case "정보 • 테크":
                setSelectedContent("정보와 테크 정보를 확인해보세요!");
                break;
            case "스터디 • 팀원":
                setSelectedContent("스터디와 팀원을 모집해보세요!");
                break;
            case "대회 • 행사 홍보":
                setSelectedContent("대회와 행사 홍보를 확인해보세요!");
                break;
            default:
                setSelectedContent("커뮤니티");
        }
    }

    return (
        <>
            <div className="flex justify-center h-screen mt-5">
                <div className="max-w-[400px] mt-5">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`p-3 pr-7 ml-3 font-bold hover:cursor-pointer hover:bg-gray-200 ${category === selectedCategory ? 'border-blue-500 text-blue-500' : 'border-gray-400 text-gray-400'}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </div>
                    ))} 
                </div>
                <div className="w-[800px] ml-5">
                    <div className="mt-7 p-5 bg-blue-50 rounded-lg border-2 border-blue-300 font-bold">
                        <div>
                            {selectedContent}
                        </div>
                        <div>
                            여러분들의 소중한 의견을 자유롭게 표현해주세요!
                        </div>
                        <div className="w-40 mt-3 text-blue-600 hover:cursor-pointer underline">
                            커뮤니티 글 작성하기
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Community;