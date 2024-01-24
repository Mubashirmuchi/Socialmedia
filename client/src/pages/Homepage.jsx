import React from "react";
import { useEffect, useState } from "react";
import { data } from "../assets/dummydata";
import axios from "axios";

const homepage = () => {
    const [sata, setsata] = useState([]);
    console.log(sata);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const datas = await axios.get("http://localhost:8000/api/post/timeline/65a53ae2b0648410429a78a8");
                setsata(datas.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchdata();
    }, []);

    return (
        <div>
            {sata.map((i, index) => {
                return (
                    <div key={index} className="  max-w-[50%]">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={i.url} alt="" />
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default homepage;
