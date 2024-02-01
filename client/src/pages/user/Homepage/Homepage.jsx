import React from "react";
import Addcomment from "../Addcomment/Addcomment";
import PostCard from "../posts/post2";
import Rightrecomendation from "../rightrec/Rightrecommentation";

const Homepage = () => {
    const arr = [
        { name: "john11", caption: "nice" },
        { name: "john22", caption: "kidukachi" },
        { name: "john1", caption: "wow" },
        { name: "john2", caption: "so beautiful" },
        { name: "john3", caption: "so elegent" },
        { name: "john4", caption: "just looking" },
        { name: "john5", caption: "like a" },
        { name: "john6", caption: "wow just looking like a wow" },
    ];

    return (
        <div className="block md:flex md:flex-flow-row-dense md:flex-cols-3 md:flex-rows-3 ">
            <div className="col-span-2">
                <Addcomment />
                {arr.map((ar, i) => (
                    <PostCard key={i} person={ar} />
                ))}
            </div>
            <Rightrecomendation />
        </div>
    );
};

export default Homepage;
