import React, { useState } from "react";
import axios from "axios";

const Profilepage = () => {
    const [image, setImage] = useState("");
    // console.log(image, "imfee");
    // const [user, setuser] = useState("");
    const user = "65a53ae2b0648410429a78a8";

    const handleImage = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    };

    const handleApi = () => {
        const formdata = new FormData();
        formdata.append("testimage", image);
        formdata.append("username", user);

        axios.post("http://localhost:8000/api/post", formdata).then((res) => {
            console.log(res);
        });
    };
    return (
        <>
            <form onSubmit={handleApi}>
                <div class="flex items-center justify-center w-full">
                    <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span class="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                {image.name}SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input type="file" id="dropzone-file" className="hidden" name="testimage" onChange={handleImage} />
                    </label>
                </div>
                <button
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default Profilepage;
