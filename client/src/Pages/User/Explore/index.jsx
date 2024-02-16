import React from "react";

const index = () => {
    return (
        <div>
            <div
                className=" bg-white shadow rounded-lg p-4 w-[calc(100vw-21rem)]    m-1 
"
            >
                <div className="bg-white flex flex-col w-full sticky top-0">
                    <h1 className="text-gray-600 text-xl font-semibold"> Explore</h1>
                    <div className="border-b border-gray-100 p-4"></div>
                </div>

                <div className="grids flex flex-wrap border-solid border-red-100 ">
                    <div className="maxwidth w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth  w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth  w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth  w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth  w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth  w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>{" "}
                    <div className="maxwidth  w-[32%] m-1">
                        <img className="w-full" src="https://picsum.photos/536/354" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
