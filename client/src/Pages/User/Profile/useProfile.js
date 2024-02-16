import React, { useCallback, useState } from "react";
import UserService from "../../../Service/employeeImages";
import { useSelector } from "react-redux";

const useProfile = () => {
    const user = useSelector((store) => store.user.user?.user);
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState("");
    const [data, setData] = useState([]);
    const getImages = useCallback(() => {
        setLoading(true);
        UserService.timeline(user?._id)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch();
    });

    return {
        url,
        setUrl,
        loading,
        params,
        setParams,
        getImages,
        data,
    };
};

export default useProfile;
