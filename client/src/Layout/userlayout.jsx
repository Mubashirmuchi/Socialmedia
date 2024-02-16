import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Userlayout = () => {
    const { isAuthenticated, user } = useSelector((store) => store.user);

    if (!isAuthenticated && !user?.token) {
        return <Navigate to={`/login`} />;
    }
    return (
        <div style={{ background: "#edf2f7" }} className="h-screen overflow-hidden flex items-center ">
            <div className="flex h-screen ">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <div className="h-full overflow-y-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userlayout;
