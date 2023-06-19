import React from "react";
import favorite_icon from "../assets/favorite_icon.svg"

function FoodItem({ foodName, foodImage, fatValue, calValue, proValue, carboValue }) {
    return (
        <div className="relative w-72 h-96">
            <button className="absolute right-0 m-4">
                <img src={favorite_icon} alt="favorite" />
            </button>
            <div className="absolute w-full h-1/2 bottom-0 rounded-2xl backdrop-blur text-white">
                <p className="pt-2 font-medium text-lg text-center">{foodName}</p>
                <div className="p-4 grid grid-cols-4 gap-2">
                    <span className="col-span-1">{fatValue} gr</span>
                    <span className="col-span-3">Fat</span>
                    <span className="col-span-1">{calValue} gr</span>
                    <span className="col-span-3">Calories</span>
                    <span className="col-span-1">{proValue} gr</span>
                    <span className="col-span-3">Proteins</span>
                    <span className="col-span-1">{carboValue} gr</span>
                    <span className="col-span-3">Carbohydrates</span>
                </div>
            </div>
            <img src={foodImage} alt="food" className="w-72 h-96 object-cover rounded-2xl" />
        </div>
    );
}

export default FoodItem;