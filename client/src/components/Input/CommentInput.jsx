import React from "react";

const CommentInput = () => {
    return (
        <input
            type="search"
            className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
            style={{ borderRadius: "25px" }}
            placeholder="Post a comment..."
            autoComplete="off"
        />
    );
};

export default CommentInput;
