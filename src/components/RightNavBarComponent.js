import React from "react";
import UserComponent from "./UserComponent";
import SignInButton from "./SignInButton";
import userData from "../data/UserData";
import api from "../api/api";
import { useState } from "react";
import { useEffect } from "react";

function RightNavBarComponent() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const response = await api.get(`user/${localStorage.getItem('user_id')}`);
            setUser(response.data);
        }
        getUser();
        console.log(user);
    }, [])

    if (!user) {
        return (
            <div className="w-16">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            {
                localStorage.getItem('token') ? <UserComponent name={user.data.name} image={user.data.avatar === 'default-profile.png' ? userData[0].photo : ''} /> : <SignInButton />
            }
        </>
    );
}

export default RightNavBarComponent;