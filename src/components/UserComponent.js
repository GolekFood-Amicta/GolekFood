import React from "react";

function UserComponent({ isPremium, name, image, onClick }) {
    return (
        <button onClick={onClick} className="flex items-center space-x-4">
            {
                isPremium
            }
            <div>
                <span className="text-GF-grey">{name}</span>
            </div>
            <img src={image} alt="user" className="rounded-full w-9 h-9" />
        </button>
    );
}

export default UserComponent;