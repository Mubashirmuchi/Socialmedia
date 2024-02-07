import React from "react";
import Fileinput from "../Fileinput/Fileinput";

const Modal = ({ createPost, setPost }) => {
    console.log("post modal");
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <Fileinput createPost={createPost} setPost={setPost} />
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default Modal;
