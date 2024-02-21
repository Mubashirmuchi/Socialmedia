import React, { useEffect, useState } from "react";
import Rightrecomendation from "../../../components/RightRecommendation";
import Card from "../../../components/Card";
import PostService from "../../../Service/postservice";
import { useSelector } from "react-redux";
import useProfile from "../Profile/useProfile";
import HomepageSkeleton from "../../../components/Skeleton/HomepageSkeleton";
import Shimmer from "../../../components/Skeleton/Shimmer";

const index = () => {
    // const [data, setData] = useState([]);
    const { user, ...balance } = useSelector((store) => store?.user?.user);
    const { loading, getImages, data } = useProfile();

    useEffect(() => {
        getImages();
    }, []);

    const sortByCreatedAt = (a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
    };
    console.log("ddsfta", data);
    return (
        <div className="block md:flex md:flex-flow-row-dense md:flex-cols-3 md:flex-rows-3 ">
            <div className="col-span-2">
                {data.length == 0 ? (
                    <Shimmer />
                ) : (
                    data.sort(sortByCreatedAt).map((item) => {
                        return (
                            <div key={item.id} className={`fade-in ${!loading ? "visible" : ""}`}>
                                <Card url={item.url} />
                            </div>
                        );
                    })
                )}
            </div>
            <Rightrecomendation />
        </div>
    );
};

export default index;
