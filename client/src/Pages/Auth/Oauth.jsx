import React from "react";

const Oauth = () => {
    return (
        <button className="flex justify-center items-center  w-full p-2 text-lg focus:outline-none">
            <svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M14.537 6.6945H14V6.66683H7.99999V9.3335H11.7677C11.218 10.8858 9.74099 12.0002 7.99999 12.0002C5.79099 12.0002 3.99999 10.2092 3.99999 8.00016C3.99999 5.79116 5.79099 4.00016 7.99999 4.00016C9.01966 4.00016 9.94733 4.38483 10.6537 5.01316L12.5393 3.1275C11.3487 2.01783 9.75599 1.3335 7.99999 1.3335C4.31833 1.3335 1.33333 4.3185 1.33333 8.00016C1.33333 11.6818 4.31833 14.6668 7.99999 14.6668C11.6817 14.6668 14.6667 11.6818 14.6667 8.00016C14.6667 7.55316 14.6207 7.11683 14.537 6.6945Z"
                    fill="#FFC107"
                />
                <path
                    d="M2.10201 4.89716L4.29234 6.5035C4.885 5.03616 6.32034 4.00016 8 4.00016C9.01967 4.00016 9.94734 4.38483 10.6537 5.01316L12.5393 3.1275C11.3487 2.01783 9.756 1.3335 8 1.3335C5.43934 1.3335 3.21867 2.77916 2.10201 4.89716Z"
                    fill="#FF3D00"
                />
                <path
                    d="M8 14.6669C9.722 14.6669 11.2867 14.0079 12.4697 12.9362L10.4063 11.1902C9.71452 11.7164 8.86915 12.0009 8 12.0002C6.266 12.0002 4.79367 10.8946 4.239 9.35156L2.065 11.0266C3.16834 13.1856 5.409 14.6669 8 14.6669Z"
                    fill="#4CAF50"
                />
                <path
                    d="M14.537 6.69417H14V6.6665H8V9.33317H11.7677C11.5047 10.072 11.0311 10.7176 10.4053 11.1902L10.4063 11.1895L12.4697 12.9355C12.3237 13.0682 14.6667 11.3332 14.6667 7.99984C14.6667 7.55284 14.6207 7.1165 14.537 6.69417Z"
                    fill="#1976D2"
                />
            </svg>{" "}
            sign in with google
        </button>
    );
};

export default Oauth;
