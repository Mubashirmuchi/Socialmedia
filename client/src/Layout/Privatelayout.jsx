import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Pagecontent from "../components/Pagecontent";

const Privatelayout = () => {
    return (
        <div className="bg-gray-900 h-screen flex sm:items-start lg:items-center   justify-center">
            <div className=" bg-gray-800 h-[600px]  flex lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
                <Sidebar />

                <div className="body flex  flex-col overflow-scroll no-scrollbar">
                    <Pagecontent />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Privatelayout;
