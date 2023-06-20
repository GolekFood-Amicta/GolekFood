import React from "react";
import NavBar from "../NavBar";
import vector from "../../assets/vector/vector-news.svg";

function News() {
    return (
        <>
            <NavBar />
            <div className="flex">
                <div className="w-1/2">

                </div>
                <div className="w-1/2">
                    <img src={vector} alt="vector" className="" />
                </div>
            </div>
        </>
    );
}

export default News;