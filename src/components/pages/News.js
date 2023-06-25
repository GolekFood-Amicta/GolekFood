import React from "react";
import NavBar from "../NavBar";
import vector from "../../assets/vector/vector-news.svg";
import NewsPaginate from "../NewsPaginate";

function News() {
    return (
        <div className="mb-8">
            <NavBar />
            <div className="flex">
                <div className="w-1/2 pl-16 pr-8 pt-8 pb-8">
                    <p className="text-sm w-1/2">Temukan berita dan informasi <span className="font-semibold">makanan sehat</span>, menarik, dan terbaru.</p>
                    <NewsPaginate newsItemsPerPage={4} />
                </div>
                <div className="w-1/2 px-8">
                    <img src={vector} alt="vector" className="fixed w-4/8" />
                </div>
            </div>
        </div>
    );
}

export default News;