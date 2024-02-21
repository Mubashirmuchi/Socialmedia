import React, { useState } from "react";

const CreatePostModal = ({ isOpen, onClose }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    // const handleModalClose = () => {
    //     setSelectedFile(null);
    //     onClose();
    // };

    return (
        <div className={`fixed inset-0 overflow-y-auto z-40 ${isOpen ? "block" : "hidden"}`}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 overflow-hidden pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="header flex justify-between">
                            <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700">
                                Choose Image
                            </label>

                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                type="button"
                                className="cursor-pointer"
                                onClick={() => {
                                    onClose(false);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_6_2)">
                                    <rect width="16" height="16" fill="white" />
                                    <path
                                        d="M8.53584 8.49306L8.18229 8.13951L7.82873 8.49306L3.6703 12.6515L3.67025 12.6514L3.66405 12.6579C3.60168 12.7225 3.52706 12.7741 3.44454 12.8096C3.36203 12.845 3.27327 12.8638 3.18345 12.8646C3.09363 12.8654 3.00454 12.8483 2.92139 12.8143C2.83824 12.7804 2.76269 12.7302 2.69914 12.6667C2.6356 12.6032 2.58533 12.5277 2.55128 12.4446C2.51723 12.3615 2.50007 12.2724 2.50081 12.1826C2.50154 12.0928 2.52016 12.004 2.55558 11.9214C2.59099 11.8389 2.64249 11.7642 2.70707 11.7018L2.70712 11.7018L2.7131 11.6959L6.8731 7.53585L7.22668 7.18227L6.87306 6.82871L2.71228 2.66871L2.71233 2.66866L2.70629 2.66282C2.64171 2.60039 2.59021 2.52572 2.55479 2.44317C2.51938 2.36062 2.50076 2.27185 2.50002 2.18203C2.49928 2.09221 2.51644 2.00314 2.5505 1.92002C2.58455 1.8369 2.63481 1.76139 2.69836 1.69791C2.7619 1.63442 2.83746 1.58423 2.92061 1.55025C3.00376 1.51628 3.09284 1.49921 3.18267 1.50003C3.27249 1.50085 3.36124 1.51955 3.44376 1.55505C3.52627 1.59054 3.60089 1.64211 3.66327 1.70675L3.66321 1.7068L3.66952 1.71311L7.82873 5.87232L8.18232 6.22591L8.53587 5.87229L12.6943 1.71308L12.6944 1.71303C12.7572 1.65019 12.8317 1.60033 12.9138 1.56631C12.9959 1.53229 13.0839 1.51477 13.1727 1.51475C13.2616 1.51473 13.3495 1.53221 13.4316 1.56619C13.5137 1.60017 13.5883 1.64999 13.6512 1.7128C13.714 1.77561 13.7639 1.85018 13.7979 1.93226C13.8319 2.01434 13.8494 2.10231 13.8494 2.19116C13.8495 2.28001 13.832 2.36799 13.798 2.45009C13.764 2.53218 13.7142 2.60678 13.6514 2.66962L9.49151 6.82871L9.13783 7.18233L9.49155 7.53592L13.6523 11.6951C13.6523 11.6951 13.6523 11.6951 13.6523 11.6951C13.7792 11.822 13.8505 11.9942 13.8505 12.1737C13.8505 12.3532 13.7792 12.5253 13.6523 12.6523C13.5253 12.7792 13.3532 12.8505 13.1737 12.8505C12.9942 12.8505 12.822 12.7792 12.6951 12.6523L8.53584 8.49306Z"
                                        fill="black"
                                        stroke="black"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_2">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        {/* <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            className="mt-1 p-2 border border-gray-300 rounded-md"
                            onChange={handleFileChange}
                        /> */}

                        {selectedFile ? (
                            " "
                        ) : (
                            <div className="flex items-center justify-center w-full">
                                <label
                                    for="dropzone-file"
                                    className="flex flex-col mt-2 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-100"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        type="file"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        )}

                        {selectedFile && (
                            <div className="imageconatiner overflow-hidden max-h-[256px]">
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Preview"
                                    className="mt-2 max-w-full object-cover"
                                />{" "}
                            </div>
                        )}
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        {selectedFile && (
                            <button
                                type="button"
                                onClick={() => {
                                    onClose(false);
                                }}
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Post
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
