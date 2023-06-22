import React from "react";

function FavoriteFoodItem({ name, image }) {
    return (
        <div className="relative">
            <div className="absolute flex justify-center items-center bg-black bg-opacity-50 backdrop-blur w-full h-1/4 bottom-0 rounded-2xl">
                <p className="text-white font-medium">{name}</p>
            </div>
            <img src={image} alt="favorite-food" className="object-cover rounded-2xl" />
        </div>
    );
}

export default FavoriteFoodItem;