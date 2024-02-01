import React from "react";

const Caption = ({ caption }) => {
    return (
        <>
            {" "}
            <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">{caption?.caption}</div>
            <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
                Love and gratitude to both The Prime Minister, The Honorable Mia Amor Mottley and our President, Her
                Excellency The Most Honorable Dame Sandra Mason for trusting me with this honor!
            </div>
        </>
    );
};

export default Caption;
