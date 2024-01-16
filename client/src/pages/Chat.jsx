import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/post/timeline/65a53acbb0648410429a78a5");
                setPostData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {postData.map((item, i) => {
                return <li key={i}>{item.img}</li>;
            })}
        </div>
    );
};

export default Chat;
