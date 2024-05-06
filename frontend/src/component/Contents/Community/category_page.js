import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { category } = useParams();
    let content;

    switch (category) {
        case "home":
            content = "커뮤니티";
            break;
        case "popular":
            content = "인기글을 확인해보세요!";
            break;
        case "qna":
            content = "질문과 답변을 확인해보세요!";
            break;
        case "free":
            content = "자유롭게 글을 작성해보세요!";
            break;
        case "career":
            content = "취업 정보를 확인해보세요!";
            break;
        case "info":
            content = "정보를 확인해보세요!";
            break;
        case "study":
            content = "스터디를 찾아보세요!";
            break;
        case "contest":
            content = "대회 정보를 확인해보세요!";
            break;
        default:
            content = "커뮤니티";
    }

    return (
        <div className="mt-7 p-5 bg-blue-50 rounded-lg border-2 border-blue-300 font-bold">
            <div>
                {content}
            </div>
            <div>
                여러분들의 소중한 의견을 자유롭게 표현해주세요!
            </div>
            <div className="w-40 mt-3 text-blue-600 hover:cursor-pointer underline">
                커뮤니티 글 작성하기
            </div>
        </div>
    );
};

export default CategoryPage;