import React from "react";

const Body = ({ children }) => {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {Header}
                        {children}
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

const Header = ({ children }) => {
    return (
        <>
            <div className="flex items-start justify-between pl-[25px] pt-[25px] rounded-t">
                <h3 className="text-[20px] mb-[24px] font-semibold">{children}</h3>
            </div>
        </>
    );
};

const Footer = ({ children }) => {
    return <div className="flex gap-[16px] items-center justify-end p-[24px] rounded-b">{children}</div>;
};

const Modal = { Body, Header, Footer };

export default Modal;
