import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
    const [response, setResponse] = useState("");
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        axios
            .post("http://localhost:8000/api/auth/login", data)
            .then((res) => {
                setResponse(res);
                console.log(res);
            })
            .catch((err) => {});
    };
    return (
        <div action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4 rounded-md">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                />
            </div>
            <div className="pb-2 pt-4">
                <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            {/* <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
            <a href="#">Forgot your password?</a>
        </div> */}
            <div className="px-4 pb-2 pt-4">
                <button
                    onClick={handleSubmit}
                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                >
                    Login
                </button>
            </div>
            <hr className="mt-10 h-full w-full opacity-50" />
            <div className="px-4 pb-2 pt-4">
                <button className="flex justify-center items-center  w-full p-2 text-lg rounded-full hover:border focus:outline-none">
                    <svg
                        className="m-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
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
                <Link to="/signup">
                    don't have an account ? <span className="text-blue-950">Signup</span>
                </Link>
            </div>
            <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                <a href="#">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="#">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
                <a href="#">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Login;
