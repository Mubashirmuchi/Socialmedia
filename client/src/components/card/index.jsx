import React from "react";
import CardHeader from "../cardheader/CardHeader";

const index = () => {
    return (
        <>
            <div className="bg-white shadow rounded-lg pb-4">
                <div className="flex flex-row px-2 py-3 mx-3">
                    <div className="w-auto h-auto rounded-full border-2 border-green-500">
                        <img
                            className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                            alt="User avatar"
                            src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200"
                        />
                    </div>
                    <div className="flex flex-col mb-2 ml-4 mt-1">
                        <div className="inline-flex text-gray-600 text-sm font-semibold">
                            <span className="flex-1 flex-shrink-0">Sara_Lauren</span>
                            <span className="mx-1 flex-1 flex-shrink-0">
                                <svg
                                    viewBox="0 0 24 24"
                                    style={{ width: " 20px", color: "blue" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g data-name="21. Verified" id="_21._Verified">
                                        <path d="M22.51,13.76a3,3,0,0,1,0-3.52l.76-1.05a1,1,0,0,0,.14-.9,1.018,1.018,0,0,0-.64-.64l-1.23-.4A2.987,2.987,0,0,1,19.47,4.4V3.1a1,1,0,0,0-1.31-.95l-1.24.4a3,3,0,0,1-3.35-1.09L12.81.41a1.036,1.036,0,0,0-1.62,0l-.76,1.05A3,3,0,0,1,7.08,2.55l-1.24-.4a1,1,0,0,0-1.31.95V4.4A2.987,2.987,0,0,1,2.46,7.25l-1.23.4a1.018,1.018,0,0,0-.64.64,1,1,0,0,0,.14.9l.76,1.05a3,3,0,0,1,0,3.52L.73,14.81a1,1,0,0,0-.14.9,1.018,1.018,0,0,0,.64.64l1.23.4A2.987,2.987,0,0,1,4.53,19.6v1.3a1,1,0,0,0,1.31.95l1.23-.4a2.994,2.994,0,0,1,3.36,1.09l.76,1.05a1.005,1.005,0,0,0,1.62,0l.76-1.05a3,3,0,0,1,3.36-1.09l1.23.4a1,1,0,0,0,1.31-.95V19.6a2.987,2.987,0,0,1,2.07-2.85l1.23-.4a1.018,1.018,0,0,0,.64-.64,1,1,0,0,0-.14-.9Zm-5.8-3.053-5,5a1,1,0,0,1-1.414,0l-3-3a1,1,0,1,1,1.414-1.414L11,13.586l4.293-4.293a1,1,0,0,1,1.414,1.414Z"></path>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <div className="flex w-full mt-1">
                            <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">UX Design</div>
                            <div className="text-gray-400 font-thin text-xs">• 1 day ago</div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-100 p-4"></div>
                <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                    <img className="rounded w-full" src="https://picsum.photos/536/354" />
                </div>
                <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">Love and gratitude</div>
                <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
                    Love and gratitude to both The Prime Minister, The Honorable Mia Amor Mottley and our President, Her
                    Excellency The Most Honorable Dame Sandra Mason for trusting me with this honor!
                </div>
                <div className="flex justify-start mb-4 border-t border-gray-100">
                    <div className="flex w-full mt-1 pt-2 pl-5">
                        <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                width="14px"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                ></path>
                            </svg>
                        </span>
                        <img
                            className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                        />
                        <img
                            className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                        />
                        <img
                            className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                            alt=""
                        />
                        <img
                            className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                        <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                width="14px"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                ></path>
                            </svg>
                        </span>
                        <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                            <svg
                                className="h-4 w-4 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="flex w-full border-t border-gray-100">
                    <div className="mt-3 mx-5 flex flex-row text-xs">
                        <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                            Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div>
                        </div>
                        <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                            Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div>
                        </div>
                    </div>
                    <div className="mt-3 mx-5 w-full flex justify-end text-xs">
                        <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">
                            Likes: <div className="ml-1 text-gray-400 text-ms"> 120k</div>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                    <img
                        className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                        alt="User avatar"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                            <svg
                                className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        type="search"
                        className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                        style={{ borderRadius: "25px" }}
                        placeholder="Post a comment..."
                        autoComplete="off"
                    />
                </div>
            </div>
        </>
    );
};

export default index;
