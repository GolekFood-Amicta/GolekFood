import React from "react";
import UserComponent from "./UserComponent";
import SignInButton from "./SignInButton";
import userData from "../data/UserData";
import api from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RightNavBarComponent() {
    const [user, setUser] = useState(null);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        async function getUser() {
            const response = await api.get(`user/${localStorage.getItem('user_id')}`);
            setUser(response.data);
        }
        getUser();
        console.log(user);
    }, [])

    const showDropdown = event => {
        setDropdown(dropdown => !dropdown);
    }

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
                localStorage.getItem('token') ? <UserComponent name={user.data.name} image={user.data.avatar === 'default-profile.png' ? userData[0].photo : ''} onClick={showDropdown} /> : <SignInButton />
            }
            {
                localStorage.getItem('token') ? <div className={`absolute ${dropdown ? 'block' : 'hidden'} flex flex-col justify-start top-20 right-16 w-40 bg-black bg-opacity-50 text-white rounded-xl`}>
                    <button className="hover:bg-white hover:bg-opacity-50 transition h-10 rounded-xl">
                        <Link to={'/Profile'}>
                            Profil
                        </Link>
                    </button>
                    <button className="hover:bg-red-500 hover:bg-opacity-50 transition h-10 rounded-xl">
                        <Link to={'/'}>
                            Keluar
                        </Link>
                    </button>
                </div> : null
            }
        </>
    );
}

export default RightNavBarComponent;