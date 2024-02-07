import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ setOpen, setPost }) => {
    return (
        <>
            <div className="z-20 hidden w-80 overflow--auto pt-24 md:block flex-shrink-0">
                <div className=" my-2 pl-7 p-2 flex">
                    <Link
                        to="/"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                ></path>
                            </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Home</span>
                    </Link>
                </div>

                <div className="my-2 pl-7 p-2 flex">
                    <Link
                        to="/message"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                ></path>
                            </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Message</span>
                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                            1.2k
                        </span>
                    </Link>
                </div>

                <div className=" my-2 pl-7 p-2 flex">
                    <Link
                        to="friends"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                ></path>
                            </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Friends</span>
                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                            (15)
                        </span>
                    </Link>
                </div>

                <div className=" my-2 pl-7 p-2 flex">
                    <button
                        onClick={() => {
                            console.log("cretepodt");
                            setPost(true);
                        }}
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_52_2)">
                                    <path
                                        d="M8 16C3.5815 16 0 12.4185 0 8C0 3.5815 3.5815 0 8 0C12.4185 0 16 3.5815 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M11.5 7.5H8.5V4.5H7.5V7.5H4.5V8.5H7.5V11.5H8.5V8.5H11.5V7.5Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_52_2">
                                        <rect width="16" height="16" fill="currentColor" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Create Post</span>
                    </button>
                </div>

                <div className=" my-2 pl-7 p-2 flex">
                    <Link
                        to="explore"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M8.99984 9.83317C8.76373 9.83317 8.56595 9.75317 8.4065 9.59317C8.24706 9.43317 8.16706 9.23539 8.1665 8.99984C8.1665 8.76373 8.2465 8.56595 8.4065 8.4065C8.5665 8.24706 8.76428 8.16706 8.99984 8.1665C9.23595 8.1665 9.434 8.2465 9.594 8.4065C9.754 8.5665 9.83373 8.76428 9.83317 8.99984C9.83317 9.23595 9.75317 9.434 9.59317 9.594C9.43317 9.754 9.23539 9.83373 8.99984 9.83317ZM8.99984 17.3332C7.84706 17.3332 6.76373 17.1143 5.74984 16.6765C4.73595 16.2387 3.854 15.6451 3.104 14.8957C2.354 14.1457 1.76039 13.2637 1.32317 12.2498C0.885948 11.2359 0.667059 10.1526 0.666504 8.99984C0.666504 7.84706 0.885393 6.76373 1.32317 5.74984C1.76095 4.73595 2.35456 3.854 3.104 3.104C3.854 2.354 4.73595 1.76039 5.74984 1.32317C6.76373 0.885948 7.84706 0.667059 8.99984 0.666504C10.1526 0.666504 11.2359 0.885393 12.2498 1.32317C13.2637 1.76095 14.1457 2.35456 14.8957 3.104C15.6457 3.854 16.2396 4.73595 16.6773 5.74984C17.1151 6.76373 17.3337 7.84706 17.3332 8.99984C17.3332 10.1526 17.1143 11.2359 16.6765 12.2498C16.2387 13.2637 15.6451 14.1457 14.8957 14.8957C14.1457 15.6457 13.2637 16.2396 12.2498 16.6773C11.2359 17.1151 10.1526 17.3337 8.99984 17.3332ZM8.99984 15.6665C10.8609 15.6665 12.4373 15.0207 13.729 13.729C15.0207 12.4373 15.6665 10.8609 15.6665 8.99984C15.6665 7.13873 15.0207 5.56234 13.729 4.27067C12.4373 2.979 10.8609 2.33317 8.99984 2.33317C7.13873 2.33317 5.56234 2.979 4.27067 4.27067C2.979 5.56234 2.33317 7.13873 2.33317 8.99984C2.33317 10.8609 2.979 12.4373 4.27067 13.729C5.56234 15.0207 7.13873 15.6665 8.99984 15.6665ZM8.99984 15.6665C7.13873 15.6665 5.56234 15.0207 4.27067 13.729C2.979 12.4373 2.33317 10.8609 2.33317 8.99984C2.33317 7.13873 2.979 5.56234 4.27067 4.27067C5.56234 2.979 7.13873 2.33317 8.99984 2.33317C10.8609 2.33317 12.4373 2.979 13.729 4.27067C15.0207 5.56234 15.6665 7.13873 15.6665 8.99984C15.6665 10.8609 15.0207 12.4373 13.729 13.729C12.4373 15.0207 10.8609 15.6665 8.99984 15.6665ZM10.3957 10.7915C10.479 10.7498 10.5554 10.6943 10.6248 10.6248C10.6943 10.5554 10.7498 10.479 10.7915 10.3957L13.229 5.18734C13.2984 5.04845 13.2812 4.92678 13.1773 4.82234C13.0734 4.71789 12.9518 4.70067 12.8123 4.77067L7.604 7.20817C7.52067 7.24984 7.44428 7.30539 7.37484 7.37484C7.30539 7.44428 7.24984 7.52067 7.20817 7.604L4.77067 12.8123C4.70123 12.9512 4.71873 13.0729 4.82317 13.1773C4.92761 13.2818 5.049 13.299 5.18734 13.229L10.3957 10.7915Z"
                                    fill="currentColor"
                                    fillOpacity="90"
                                />
                            </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Explore</span>
                    </Link>
                </div>

                <div className=" my-2 pl-7 p-2 flex ">
                    <Link
                        to="profile"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                ></path>
                            </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                    </Link>
                </div>

                <div className=" my-2 pl-7 p-2 flex">
                    <button
                        onClick={() => {
                            setOpen(true);
                        }}
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.16667 15.5C1.70833 15.5 1.31611 15.3369 0.99 15.0108C0.663889 14.6847 0.500556 14.2922 0.5 13.8333V2.16667C0.5 1.70833 0.663333 1.31611 0.99 0.99C1.31667 0.663889 1.70889 0.500556 2.16667 0.5H8V2.16667H2.16667V13.8333H8V15.5H2.16667ZM11.3333 12.1667L10.1875 10.9583L12.3125 8.83333H5.5V7.16667H12.3125L10.1875 5.04167L11.3333 3.83333L15.5 8L11.3333 12.1667Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
