import React, { useEffect, useState } from "react";
import CardHeader from "../../../components/cardheader/CardHeader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const posts = [
        {
            id: 1,
            imageUrl: "https://picsum.photos/536/354",
            caption: "Awesome day at the beach! 🏖️",
        },
        {
            id: 2,
            imageUrl: "https://picsum.photos/536/355",
            caption: "Exploring the city streets. 🌆",
        },
        {
            id: 3,
            imageUrl: "https://picsum.photos/536/355",
            caption: "Exploring the city streets. 🌆",
        },
        {
            id: 4,
            imageUrl: "https://picsum.photos/536/355",
            caption: "Exploring the city streets. 🌆",
        },
        {
            id: 5,
            imageUrl: "https://picsum.photos/536/355",
            caption: "Exploring the city streets. 🌆",
        },
        // Add more posts as needed
    ];
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/post/userpost/65a53ae2b0648410429a78a8");
                setPostData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log("postdata", postData);

    const getuser = () => {
        let user = localStorage.getItem("user");
        if (user) {
            user = JSON.parse(user);
        } else {
            user = null;
        }
        return user;
    };
    const navigate = useNavigate();

    const [user, setUser] = useState(getuser);

    return (
        <>
            {user ? (
                <div className="bg-white w-[1200px] h-screen p-6">
                    <div className="header flex justify-between w-1/2">
                        <img className="rounded-full h-20 w-20" src="https://picsum.photos/536/354" alt="Profile Picture" />
                        <div className="list flex justify-between w-[300px]">
                            <div className="posts flex flex-col items-center mr-2">
                                <p className="">
                                    <strong>Posts</strong>
                                </p>
                                <p>{posts.length}</p>
                            </div>
                            <div className="posts flex flex-col items-center mr-2">
                                <p className="">
                                    <strong>Followers</strong>
                                </p>
                                <p>343</p>
                            </div>
                            <div className="posts flex flex-col items-center mr-2">
                                <p className="">
                                    <strong>Following</strong>
                                </p>
                                <p>200</p>
                            </div>
                        </div>
                    </div>
                    <div className="info flex mt-6">
                        <div className="w-1/3">
                            <h2 className="text-2xl font-bold">{user.user.username}</h2>
                            <p className="text-gray-600">Bio: Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="w-1/3">
                            <h2 className="text-2xl font-bold">Location</h2>
                            <p className="text-gray-600">City, Country</p>
                        </div>
                        <div className="w-1/3">
                            <h2 className="text-2xl font-bold">Joined</h2>
                            <p className="text-gray-600">January 2022</p>
                        </div>
                    </div>
                    <div className="posts mt-6">
                        <h2 className="text-2xl font-bold mb-4">Posts</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {postData.map((post) => (
                                <div key={post._id} className="post ">
                                    <img className="w-full h-48 object-cover " src={post.url} alt={`Post ${post.id}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                navigate("/login")
            )}
        </>
    );
};

export default Profile;
