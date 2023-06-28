import React from "react";
import favorite_icon from "../assets/favorite.svg";
import unfavorite_icon from "../assets/unfavorite.svg";
import { useState } from "react";

function FavoriteFoodItem({ name, image }) {
    const [isFavorite, setFavorite] = useState(false);

    const favorite = event => {
        event.preventDefault();
        setFavorite(isFavorite => !isFavorite);
    }

    return (
        <div className="relative">
            <button onClick={favorite} className="absolute right-0 m-2">
                <img src={isFavorite ? favorite_icon : unfavorite_icon} alt="favorite" className="w-10" />
            </button>
            <div className="absolute flex justify-center items-center bg-black bg-opacity-50 backdrop-blur w-full h-1/4 bottom-0 rounded-2xl">
                <p className="text-white font-medium">{name}</p>
            </div>
            <img src={image} alt="favorite-food" className="object-cover rounded-2xl" />
        </div>
    );
}

export default FavoriteFoodItem;