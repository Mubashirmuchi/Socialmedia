import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Logout from "../components/LogoutModal";
import CreatePostModal from "../components/CreatePostModal/iindex";
const Userlayout = () => {
    const { isAuthenticated, user } = useSelector((store) => store.user);
    const [open, setOpen] = useState(false);
    const [createPost, setPost] = useState(false);
    const [isopen, setisopen] = useState(false);
    const [onclose, setonclose] = useState(false);

    if (!isAuthenticated && !user?.token) {
        return <Navigate to={`/login`} />;
    }
    return (
        <div style={{ background: "#edf2f7" }} className="h-screen overflow-hidden flex items-center ">
            <div className="flex h-screen ">
                <Sidebar setPost={setPost} setOpen={setOpen} />
                <div className="flex flex-col flex-1">
                    <div className="h-full overflow-y-auto">
                        <Outlet />
                        {open && <Logout open={open} setOpen={setOpen} />}
                        {createPost && <CreatePostModal isOpen={setisopen} onClose={setPost} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userlayout;
