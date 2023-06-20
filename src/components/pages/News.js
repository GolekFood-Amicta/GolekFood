import React from "react";
import NavBar from "../NavBar";
import vector from "../../assets/vector/vector-news.svg";
import NewsItem from "../NewsItem";
import NewsPaginate from "../NewsPaginate";

function News() {
    return (
        <div className="mb-8">
            <NavBar />
            <div className="flex">
                <div className="w-1/2 pl-16 pr-8 pt-8">
                    <p className="text-sm w-1/2">Find out about the newest and most exciting <span className="font-semibold">healthy food</span> trends.</p>
                    <NewsPaginate newsItemsPerPage={4} />
                </div>
                <div className="w-1/2 px-8">
                    <img src={vector} alt="vector" className="fixed w-2/5" />
                </div>
            </div>
        </div>
    );
}

export default News;