import React from "react";
import UserComponent from "./UserComponent";
import SignInButton from "./SignInButton";
import api from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import apiBaseURL from "../api/apiBaseURL";
import premium from "../assets/premium.svg";

function RightNavBarComponent() {
    const [user, setUser] = useState(null);
    const [dropdown, setDropdown] = useState(false);

    const userId = localStorage.getItem('user_id');

    useEffect(() => {
        async function getUser() {
            const response = await api.get(`user/${userId}`);
            setUser(response.data);
        }
        getUser();
    }, [userId]);

    async function logout() {
        localStorage.clear();
        await api.get('logout', {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
    }

    const showDropdown = () => {
        setDropdown(dropdown => !dropdown);
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
                user && localStorage.getItem('token') ? <UserComponent name={user.data.name} image={`${apiBaseURL}storage/image/${user.data.avatar}`} isPremium={user.data.subscription === true ? <img src={premium} alt="premium" /> : null} onClick={showDropdown} /> : <SignInButton />
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
                    <button onClick={logout} className="hover:bg-red-500 hover:bg-opacity-50 transition h-10 rounded-xl">
                        <a href="/">
                            <div className="w-full h-10 flex justify-center items-center">
                                Keluar
                            </div>
                        </a>
                    </button>
                </div> : null
            }
        </>
    );
}

export default RightNavBarComponent;
