import React from "react";
import CardHeader from "../../../components/Cardheader";

const index = () => {
    return (
        <div
            className=" bg-white shadow rounded-lg p-4 w-[calc(100vw-21rem)] no-scrollbar overflow-y-auto  m-1 h-[calc(100vh-10px)]
"
        >
            <h2 className="text-gray-600 text-xl font-semibold">Message</h2>
            <div className="border-b-2 border-gray-100 p-4"></div>

            <div className=" bg-gray-100 w-1/3 h-screen overflow-x-auto">
                <CardHeader />
                <CardHeader />
                <CardHeader />
            </div>
        </div>
    );
};

export default index;