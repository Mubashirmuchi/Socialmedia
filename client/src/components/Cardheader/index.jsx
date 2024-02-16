import React from "react";

const index = () => {
    return (
        <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto rounded-full">
                <img
                    className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                    alt="User avatar"
                    src="https://lh3.googleusercontent.com/a/ACg8ocKweFarsxbUoBIoFDSPPbDLqmtMEDE2INHwKsKE1wv15g=s96-c"
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

export default index;
