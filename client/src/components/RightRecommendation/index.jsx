import React from "react";

const Rightrecomendation = () => {
    return (
        <>
            <div className="hidden md:block h-fit lg:block sticky top-6">
                <input
                    type="search"
                    className="ml-10 w-3/4 py-2 pl-4 px-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-gray-50 focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                    style={{ borderRadius: "25px" }}
                    placeholder="Search"
                    autoComplete="off"
                />
                <div className="max-w-sm rounded-lg overflow-hidden shadow-sm m-4 mt-5">
                    <header className="font-bold text-2xl px-5 py-4">Who to follow</header>

                    <main className="px-5">
                        <div className="grid grid-cols-6">
                            <div className="">
                                <img src="https://picsum.photos/200/200" className="h-8 w-8 rounded-full" />
                            </div>

                            <div className="col-span-3 px-1 font-semibold flex flex-col">
                                <div className="text-sm"> Sangwa Albine </div>
                                <div className="text-xm text-gray-700 font-light"> @__svngwa._ </div>
                            </div>

                            <div className="col-span-2 py-2 justify-self-end">
                                <button className=" text-blue-500 text-xs font-semibold text-md rounded-full py-1 px-4">
                                    .Follow
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-6 mt-6">
                            <div className="">
                                <img src="https://picsum.photos/200/200?i=200" className="h-8 w-8 rounded-full" />
                            </div>

                            <div className="col-span-3 px-1 font-semibold flex flex-col ">
                                <div className="text-sm"> Mbonyintege </div>
                                <div className="text-xm text-gray-700 font-light"> @Cpwr</div>
                            </div>

                            <div className="col-span-2 py-2 justify-self-end">
                                <button className=" text-blue-500 text-xs font-semibold text-md rounded-full py-1 px-4">
                                    .Follow
                                </button>
                            </div>
                        </div>
                    </main>
                </div>

                <div className="max-w-sm rounded-lg overflow-hidden shadow-sm m-4 mt-5">
                    <div className="flex">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">1 . Trending</p>
                            <h2 className="px-4 ml-2 w-48 font-bold ">#Microsoft363</h2>
                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">5,466 posts</p>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a
                                href=""
                                className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
                            >
                                <svg
                                    className="m-2 h-5 w-5"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">2 . Politics . Trending</p>
                            <h2 className="px-4 ml-2 w-48 font-bold ">#HI-Fashion</h2>
                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">8,464 posts</p>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a
                                href=""
                                className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
                            >
                                <svg
                                    className="m-2 h-5 w-5"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-1">
                            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">3 . Rock . Trending</p>
                            <h2 className="px-4 ml-2 w-48 font-bold ">#Ferrari</h2>
                            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">5,586 Concepts</p>
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                            <a
                                href=""
                                className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
                            >
                                <svg
                                    className="m-2 h-5 w-5"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-1 p-4">
                            <h2 className="px-4 ml-2 w-48 font-semibold text-sm text-blue-400">Show more</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rightrecomendation;
