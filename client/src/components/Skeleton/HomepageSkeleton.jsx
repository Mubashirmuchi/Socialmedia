import React from "react";

const HomepageSkeleton = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <div className="max-w-sm mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="animate-pulse bg-gray-300 w-full h-64"></div>

                <div className="p-4">
                    <div className="flex items-center mb-4">
                        <div className="animate-pulse bg-gray-300 w-8 h-8 rounded-full mr-2"></div>
                        <p className="text-sm font-semibold text-gray-700">Username</p>
                    </div>

                    <div className="animate-pulse bg-gray-300 h-6 w-4/5 mb-4"></div>

                    <div className="flex items-center text-gray-600">
                        <div className="animate-pulse bg-gray-300 w-6 h-6 mr-1"></div>
                        <span className="mr-4">Like</span>
                        <div className="animate-pulse bg-gray-300 w-6 h-6 mr-1"></div>
                        <span className="mr-4">Comment</span>
                        <div className="animate-pulse bg-gray-300 w-6 h-6 mr-1"></div>
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageSkeleton;
