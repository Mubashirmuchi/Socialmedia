import axios from "axios";
import React, { useState } from "react";

const Fileinput = ({ setPost, createPost }) => {
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const user = "65a53ae2b0648410429a78a8";

    const handleImage = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        setImageUrl(URL.createObjectURL(selectedImage)); // Create URL for the selected image
        console.log(selectedImage.name);
    };

    const handleApi = () => {
        const formdata = new FormData();
        formdata.append("testimage", image);
        formdata.append("username", user);

        axios.post("http://localhost:8000/api/post", formdata).then((res) => {
            console.log(res);
        });
    };

    console.log(image);

    return (
        <div className="flex items-center justify-center w-[400px]">
            <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center relative justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <button
                        onClick={() => {
                            setPost(!createPost);
                        }}
                        type="button"
                        className=" text-gray-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg bordertext-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10  dark:text-gray-300 dark:border-gray-500 dark:hover:text-red-800 dark:hover:bg-gray-600 dark:focus:ring-gray-600 absolute top-5 right-4"
                        data-modal-hide="popup-modal"
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <div className="flex items-center justify-center w-[400px]">
                        {/* ... other JSX code ... */}
                        {imageUrl && <img src={imageUrl} alt="Selected Image" className="max-h-64 mb-2" />}
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {image ? image.name : "No file selected"} SVG, PNG, JPG, or GIF (MAX. 800x400px)
                        </p>
                        {/* ... other JSX code ... */}
                    </div>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {image.name}SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                    <img src={image.name} alt="" />
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleImage} />
            </label>
            <button onClick={handleApi} className="bg-red-700">
                Post
            </button>
        </div>
    );
};

export default Fileinput;
