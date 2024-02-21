import React, { useEffect, useState } from "react";

const index = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const arr = [
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" },
    ];

    return (
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="grid gap-4">
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        class="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default index;
