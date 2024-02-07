import React from "react";
import { Outlet } from "react-router";
import { useState } from "react";
import Sidebar from "../components/sidenav";
import Logout from "../pages/user/settings/Logout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../components/modal/Modal";

const Userlayout = () => {
    const [open, setOpen] = useState(false);
    const [createPost, setPost] = useState(false);

    const getuser = () => {
        let user = localStorage.getItem("user");
        if (user) {
            user = JSON.parse(user);
        } else {
            user = null;
        }
        return user;
    };
    const { user } = useSelector((store) => store);

    if (!user) {
        navigate("/login");
    }

    return (
        <div style={{ background: "#edf2f7" }} className="h-screen overflow-hidden flex items-center ">
            <div className="flex h-screen ">
                <Sidebar setPost={setPost} setOpen={setOpen} />
                <div className="flex flex-col flex-1">
                    <div className="h-full overflow-y-auto">
                        <Outlet />
                        {open && <Logout open={open} setOpen={setOpen} />}
                        {createPost && <Modal createPost={createPost} setPost={setPost} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userlayout;
