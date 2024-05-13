import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto mt-5">
      {posts.map((post, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4 border-2 border-slate-200">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-2">{post.content}</p>
          <div className="flex items-center text-gray-500">
            <span className="mr-2">{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;