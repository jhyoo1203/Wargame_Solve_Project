import React, {useState} from "react";
import wargame from 'image/wargame.png';

const Header = ({ setActiveMainContent }) => {
    const categories = ["워게임", "랭킹", "커뮤니티"];
    const components = ["Wargame", "Ranking", "Community"];
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();

    const handleCategoryToggle = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setActiveMainContent(components[categories.indexOf(category)])
    };

    return (
        <header className="sticky top-0 w-full bg-white z-10">
            <div className="space-x-6 pt-3 mb-3 mt-2">
                <div className="flex">
                    </div>
                        <div className="flex mt-5 font-bold text-lg hover:cursor-pointer">
                            <img
                                src={wargame} alt="wargame" className="w-8 h-8 ml-5"
                                onClick={() => {
                                    setSelectedCategory("Main");
                                    setActiveMainContent("Main");
                                }}
                            />
                            {categories.map((category, index) => (
                                <p 
                                    key={index}
                                    className={`${index > 0 ? 'ml-8' : 'ml-12'} ${selectedCategory === category ? 'text-black' : 'text-slate-400'} hover:text-black hover:cursor-pointer`}
                                    onMouseEnter={handleCategoryToggle}
                                    onClick={() => {
                                        handleCategoryClick(category);
                                    }}
                                >
                                    {category}
                                </p>
                            ))}
                            <a href="https://jhyoo1203.github.io/DPR_For_Enterprise/" target="_blank" rel="noopener noreferrer"><p className="fixed bg-blue-600 p-2 rounded-lg text-sm right-10 text-white hover:cursor-pointer hover:underline">로그인</p></a>
                        </div>
                    <div>
                </div>
            </div>
            <div className="w-full h-px bg-gray-400 mt-5"></div>
        </header>
    )
}

export default Header;