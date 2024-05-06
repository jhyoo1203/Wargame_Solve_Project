import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const Community = () => {
    const categories = useMemo(() => ["HOME", "인기글🔥", "Q&A", "자유게시판", "이직 • 커리어", "정보 • 테크", "스터디 • 팀원", "대회 • 행사 홍보"], []);
    const routes = useMemo(() => ["home", "popular", "qna", "free", "career", "info", "study", "contest"], []);

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const categoryIndex = routes.indexOf(location.pathname.split('/')[2]);
        if (categoryIndex !== -1) {
            setSelectedCategory(categories[categoryIndex]);
        }
    }, [location, categories, routes]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate(routes[categories.indexOf(category)]);
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
                            {selectedCategory}
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