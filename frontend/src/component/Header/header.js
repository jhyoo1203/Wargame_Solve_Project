import React, {useState} from "react";
import wargame from 'image/wargame.png';
import { Link } from 'react-router-dom';

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
        <header className="sticky top-0 w-full bg-white bg-opacity-80 z-10 shadow-lg">
            <div className="space-x-6 pt-3 mb-3 mt-2">
                <div className="flex">
                    </div>
                        <div className="flex justify-between mt-5 font-bold text-lg">
                            <div className="flex">
                                <Link to="/" rel="noopener noreferrer">
                                    <div className="flex">
                                        <img
                                            src={wargame} alt="wargame" className="w-8 h-8 ml-5 hover:cursor-pointer"
                                            onClick={() => {
                                                setSelectedCategory("Main");
                                                setActiveMainContent("Main");
                                            }}
                                        />
                                        <p
                                            className="text-lg ml-3"
                                            onClick={() => {
                                                setSelectedCategory("Main");
                                                setActiveMainContent("Main");
                                            }}
                                        >
                                            WargameSolve
                                        </p>
                                    </div>
                                </Link>
                                {categories.map((category, index) => (
                                    <Link to="/" rel="noopener noreferrer">
                                        <p 
                                            key={index}
                                            className={`${index > 0 ? 'ml-8' : 'ml-12'} ${selectedCategory === category ? 'text-black' : 'text-gray-400'} hover:text-black hover:cursor-pointer`}
                                            onMouseEnter={handleCategoryToggle}
                                            onClick={() => {
                                                handleCategoryClick(category);
                                            }}
                                        >
                                            {category}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                            <Link to="/login" rel="noopener noreferrer">
                                <p className="-mt-1 mr-10 bg-blue-600 p-2 rounded-lg text-sm text-white hover:cursor-pointer hover:underline">
                                    로그인
                                </p>
                            </Link>
                        </div>
                    <div>
                </div>
            </div>
            <div className="w-full h-px bg-gray-400 mt-5"></div>
        </header>
    )
}

export default Header;