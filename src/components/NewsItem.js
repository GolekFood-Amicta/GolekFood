import React from "react";
import { Link } from "react-router-dom";

function NewsItem({ state, title, body, author, newsImage, authorImage, link }) {
    return (
        <Link to={link} state={state}>
            <div className="flex space-x-8 my-4">
                <img src={newsImage} alt="news" className="rounded-2xl w-32 h-32 object-cover" />
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col space-y-2 pb-2">
                        <p className="font-medium">{title}</p>
                        <p dangerouslySetInnerHTML={{ __html: body }} className="font-light line-clamp-3 text-sm text-justify overflow-ellipsis"></p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src={authorImage} alt="author" className="rounded-full w-6" />
                        <p className="font-light text-xs">{author}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NewsItem;