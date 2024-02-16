import { useSelector } from "react-redux";
import useProfile from "./useProfile";
import { useEffect } from "react";
import Skeleton from "../../../components/Skeleton";
import "./index.css";

const index = () => {
    const user = useSelector((store) => store.user.user?.user);
    const { loading, getImages, data } = useProfile();

    useEffect(() => {
        getImages();
    }, []);

    console.log(
        "data",
        data.map((item) => item.url)
    );

    console.log(data.length, "length");
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <div className="bg-white w-[1200px] h-screen p-6">
            <div className="header flex justify-between w-1/2">
                {user?.profilePicture ? (
                    <img className="rounded-full h-20 w-20" src={user?.profilePicture} alt="Profile Picture" />
                ) : (
                    <img
                        className="rounded-full h-20 w-20"
                        src="https://i.pinimg.com/736x/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.jpg"
                        alt="Profile Picture"
                    />
                )}
                <div className="list flex justify-between w-[300px]">
                    <div className="posts flex flex-col items-center mr-2">
                        <p className="">
                            <strong>Posts</strong>
                        </p>
                        <p>12</p>
                    </div>
                    <div className="posts flex flex-col items-center mr-2">
                        <p className="">
                            <strong>Followers</strong>
                        </p>
                        <p>{user?.followers.length}</p>
                    </div>
                    <div className="posts flex flex-col items-center mr-2">
                        <p className="">
                            <strong>Following</strong>
                        </p>
                        <p>{user?.following.length}</p>
                    </div>
                </div>
            </div>
            <div className="info flex mt-6">
                <div className="w-1/3">
                    <h2 className="text-2xl font-bold">{user?.username}</h2>
                    <p className="text-gray-600">{user?.fullname}</p>
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
                    {loading && (
                        <>
                            {arr.map((item) => (
                                <Skeleton lenth={6} />
                            ))}
                        </>
                    )}
                    {data &&
                        data.map((item) => {
                            return (
                                <div key={item.id} className={`fade-in ${!loading ? "visible" : ""}`}>
                                    <img className="w-full h-48 object-cover " src={item.url} alt={item.id} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default index;
