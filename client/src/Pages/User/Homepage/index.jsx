import React, { useEffect } from "react";
import Rightrecomendation from "../../../components/RightRecommendation";
import Card from "../../../components/Card";

const index = () => {
    return (
        <div className="block md:flex md:flex-flow-row-dense md:flex-cols-3 md:flex-rows-3 ">
            <div className="col-span-2">
                <Card />
            </div>
            <Rightrecomendation />
        </div>
    );
};

export default index;
