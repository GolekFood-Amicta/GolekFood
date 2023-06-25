import React from "react";
import NavBar from "../NavBar";
import userData from "../../data/UserData";
import handWaving from "../../assets/hand-waving.svg";
import FavoriteFoodItem from "../FavoriteFoodItem";

function Profile() {
    return (
        <div>
            <NavBar />
            <div className="flex mb-8">
                <div className="w-1/3 px-16">
                    <div className="flex space-x-2">
                        <p><span className="font-semibold">Hi</span>, {userData.map((data) => data.name)}</p>
                        <img src={handWaving} alt="hand-waving" className="w-6 h-6" />
                    </div>
                    <img src={userData.map((data) => data.photo)} alt="profile" className="w-full my-12 rounded-lg" />
                    <form className="space-y-4">
                        <label className="font-medium flex flex-col">
                            Name
                            <input type="text" value={userData.map((data) => data.name)} className="font-light border-b-2 border-black bg-transparent " />
                        </label>
                        <label className="font-medium flex flex-col">
                            Email
                            <input type="email" value={userData.map((data) => data.email)} className="font-light border-b-2 border-black bg-transparent" />
                        </label>
                        <label className="font-medium flex flex-col">
                            Address
                            <input type="text" value={userData.map((data) => data.address)} className="font-light border-b-2 border-black bg-transparent" />
                        </label>
                        <label className="font-medium flex flex-col">
                            Password
                            <input type="password" value={userData.map((data) => data.password)} className="font-light border-b-2 border-black bg-transparent" />
                        </label>
                        <button className="bg-GF-green w-full py-4 rounded-xl font-medium text-white">
                            Edit Profile
                        </button>
                    </form>
                </div>
                <div className="w-2/3 px-16">
                    <p className="text-GF-grey font-semibold mb-12">Makanan Favorit</p>
                    <div className="grid grid-cols-3 gap-10">
                        <FavoriteFoodItem
                            name={"Roti Putih"}
                            image={"https://img.my-best.id/content_section/beforehand_tips/4e0654064c1f4f6c6f82ca43010f122e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=a3da0b23fcedeb9e0f0e9f86034c1225"}
                        />
                        <FavoriteFoodItem
                            name={"Roti Putih"}
                            image={"https://img.my-best.id/content_section/beforehand_tips/4e0654064c1f4f6c6f82ca43010f122e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=a3da0b23fcedeb9e0f0e9f86034c1225"}
                        />
                        <FavoriteFoodItem
                            name={"Roti Putih"}
                            image={"https://img.my-best.id/content_section/beforehand_tips/4e0654064c1f4f6c6f82ca43010f122e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=a3da0b23fcedeb9e0f0e9f86034c1225"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;