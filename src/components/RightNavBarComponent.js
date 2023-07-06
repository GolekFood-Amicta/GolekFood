import React from "react";
import UserComponent from "./UserComponent";
import SignInButton from "./SignInButton";
import api from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import apiBaseURL from "../api/apiBaseURL";

function RightNavBarComponent() {
    const [user, setUser] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const [isLogout, setLogout] = useState(false);

    useEffect(() => {
        async function getUser() {
            const response = await api.get(`user/${localStorage.getItem('user_id')}`);
            setUser(response.data);
        }
        getUser();
        console.log(user);
    }, [])

    const showDropdown = () => {
        setDropdown(dropdown => !dropdown);
    }

    const toggleLogout = () => {
        setLogout(isLogout => !isLogout);
    }

    if (!user) {
        return (
            <div className="w-24 px-4 py-2 flex justify-center items-center bg-GF-light-grey backdrop-blur bg-opacity-50 rounded-2xl">
                <div className="animate-spin w-6 h-6 border-2 border-GF-grey border-dashed rounded-full" />
            </div>
        );
    }

    return (
        <>
            {
                user && localStorage.getItem('token') ? <UserComponent name={user.data.name} image={`${apiBaseURL}storage/image/${user.data.avatar}`} onClick={showDropdown} /> : <SignInButton />
            }
            {
                localStorage.getItem('token') ? <div className={`absolute ${dropdown ? 'block' : 'hidden'} flex flex-col justify-start top-20 right-16 w-40 bg-black bg-opacity-50 text-white rounded-xl`}>
                    <button className="hover:bg-white hover:bg-opacity-50 transition h-10 rounded-xl">
                        <Link to={'/Profile'}>
                            <div className="w-full h-10 flex justify-center items-center">
                                Profil
                            </div>
                        </Link>
                    </button>
                    <button onClick={toggleLogout} className="hover:bg-red-500 hover:bg-opacity-50 transition h-10 rounded-xl">
                        <Link to={'/'}>
                            <div className="w-full h-10 flex justify-center items-center">
                                Keluar
                            </div>
                        </Link>
                    </button>
                </div> : null
            }
            {
                isLogout ? localStorage.clear() : null
            }
        </>
    );
}

export default RightNavBarComponent;