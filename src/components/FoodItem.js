import React from "react";
import favorite_icon from "../assets/favorite_icon.svg"

function FoodItem({ foodName, foodImage, fatValue, calValue, proValue, carboValue }) {
    return (
        <div className="relative w-72 h-96">
            <button className="absolute right-0 m-4">
                <img src={favorite_icon} alt="favorite" />
            </button>
            <div className="absolute w-full h-1/2 bottom-0 rounded-2xl bg-black bg-opacity-50 backdrop-blur text-white">
                <p className="pt-2 font-medium text-lg text-center">{foodName}</p>
                <div className="p-4 grid grid-cols-6 gap-2">
                    <span className="col-span-2">{fatValue} g</span>
                    <span className="col-span-4">Lemak</span>
                    <span className="col-span-2">{calValue} kal</span>
                    <span className="col-span-4">Kalori</span>
                    <span className="col-span-2">{proValue} g</span>
                    <span className="col-span-4">Protein</span>
                    <span className="col-span-2">{carboValue} g</span>
                    <span className="col-span-4">Karbohidrat</span>
                </div>
            </div>
            <img src={foodImage} alt="food" className="w-72 h-96 object-cover  border-2 border-[#5F7161E5] border-opacity-90 rounded-2xl" />
        </div>
    );
}

export default FoodItem;