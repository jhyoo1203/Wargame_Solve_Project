import React, { useState } from "react";

const Category = () => {
    const categories = ["CTF", "wargame", "커뮤니티"];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    

    return(
      <div class="">
      <div classname="grid grid-cols-1 divide-y">
          {categories.map((category, index) => (
                  <div
                      key={index}
                      className={`p-3 pr-7 ml-3 font-bold hover:cursor-pointer hover:bg-gray-200 max-w-32 ${category === selectedCategory ? 'border-blue-500 text-blue-500' : 'border-gray-400 text-gray-400'}`}
                      onClick={() => setSelectedCategory(category)}
                  >
                      {category}
                  </div>
              ))} 
      </div>
        </div>
    );
}
export default Category;