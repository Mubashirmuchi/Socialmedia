import React from "react";
import CardHeader from "../../../components/cardheader/CardHeader";
import Photo from "../../../components/Post/Photo";
import Caption from "../../../components/Caption/Caption";
import Savetag from "../../../components/savetag/Savetag";
import Likedusers from "../../../components/Likedusers/Likedusers";
import ShareTag from "../../../components/Sharetag/ShareTag";
import Likebtn from "../../../components/button/Likebtn";
import CommentInput from "../../../components/Input/CommentInput";

const PostCard = ({ person }) => {
    return (
        <>
            <div className="bg-white shadow rounded-lg my-6 pb-4">
                <CardHeader name={person} />
                <div className="border-b border-gray-100 p-4"></div>
                <Photo />
                <Caption caption={person} />
                <div className="flex justify-start mb-4 border-t border-gray-100">
                    <div className="flex w-full mt-1 pt-2 pl-5">
                        <Savetag />
                        <Likedusers />
                    </div>
                    <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                        <ShareTag />
                        <Likebtn />
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
                    <CommentInput />
                </div>
            </div>
        </>
    );
};

export default PostCard;
