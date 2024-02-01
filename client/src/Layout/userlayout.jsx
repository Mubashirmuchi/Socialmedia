import React from "react";
import { Outlet } from "react-router";
import { useState } from "react";
import Sidebar from "../components/sidenav";
import Logout from "../pages/user/settings/Logout";
const Userlayout = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ background: "#edf2f7" }} className="h-screen overflow-hidden flex items-center ">
            <div className="flex h-screen ">
                <Sidebar setOpen={setOpen} />
                <div className="flex flex-col flex-1">
                    <div className="h-full overflow-y-auto">
                        <Outlet />
                        {open && <Logout setOpen={setOpen} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userlayout;
