import React from "react";

const Photo = ({ url }) => {
    return (
        <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
            <img className="rounded w-full" src={url} />
        </div>
    );
};

export default Photo;
