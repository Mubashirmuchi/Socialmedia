import React from "react";

const CardHeader = ({ name }) => {
    return (
        <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto rounded-full">
                <img
                    className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                    alt="User avatar"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
                />
            </div>
            <div className="flex flex-col mb-2 ml-4 mt-1">
                <div className="text-gray-600 text-sm font-semibold">{name?.name}</div>
                <div className="flex w-full mt-1">
                    <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">SEO</div>
                    <div className="text-gray-400 font-thin text-xs">• 30 seconds ago</div>
                </div>
            </div>
        </div>
    );
};

export default CardHeader;
