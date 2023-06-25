import React from "react";

function UserComponent({ name, image, onClick }) {
    return (
        <button onClick={onClick} className="flex items-center space-x-4">
            <span className="text-GF-grey">{name}</span>
            <img src={image} alt="user" className="rounded-full w-9" />
        </button>
    );
}

export default UserComponent;