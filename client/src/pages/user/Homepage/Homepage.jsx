import React, { useEffect, useState } from "react";
import Addcomment from "../Addcomment/Addcomment";
import PostCard from "../posts/post2";
import Rightrecomendation from "../rightrec/Rightrecommentation";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/post/timeline/65a53ae2b0648410429a78a8");
                setPostData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const [postData, setPostData] = useState([]);

    const getuser = () => {
        let user = localStorage.getItem("user");
        if (user) {
            user = JSON.parse(user);
        } else {
            user = null;
        }
        return user;
    };

    const [user, setUser] = useState(getuser);
    const navigate = useNavigate();
    return (
        <>
            {user ? (
                <div className="block md:flex md:flex-flow-row-dense md:flex-cols-3 md:flex-rows-3 ">
                    <div className="col-span-2">
                        <Addcomment />
                        {postData.map((ar, i) => (
                            <PostCard key={i} url={ar?.url} person={ar} />
                        ))}
                    </div>
                    <Rightrecomendation />
                </div>
            ) : (
                <Navigate to="login" />
            )}
        </>
    );
};

export default Homepage;
