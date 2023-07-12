import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import RightNavBarComponent from "./RightNavBarComponent";
import { useState } from "react";

function NavBar() {
    const [warning, setWarning] = useState(false);

    const showWarning = () => {
        if (!localStorage.getItem('user_id')) {
            setWarning(true);
        }
    }

    const hideWarning = () => {
        setWarning(false);
    }

    return (
        <>
            <div className={`${warning === false ? 'hidden' : ''} z-[999] fixed shadow m-auto top-0 bottom-0 left-0 right-0 w-1/4 h-fit bg-white rounded-3xl p-8`}>
                <div className="flex justify-end">
                    <button onClick={hideWarning} className="text-2xl">&times;</button>
                </div>
                <p className="my-4 text-justify">Untuk menggunakan fitur <span className="font-bold text-GF-green">Temukan Makanan</span>, silahkan masuk terlebih dahulu menggunakan akun Anda.</p>
                <Link to={'/SignIn'}>
                    <button className="w-full py-4 bg-GF-green text-white rounded-xl transition hover:bg-opacity-75">
                        Masuk
                    </button>
                </Link>
            </div>
            {
                warning === true ? <div className="z-[700] fixed backdrop-blur w-screen h-screen" /> : null
            }
            <nav className="sticky z-[800] top-0 grid grid-cols-3 backdrop-blur px-16 py-8">
                <div className="flex justify-start items-center">
                    <Logo />
                </div>
                <ul className="flex space-x-8 font-semibold m-auto">
                    <li>
                        <Link to={"/"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Beranda</Link>
                    </li>
                    <li onClick={showWarning}>
                        <Link to={localStorage.getItem('user_id') ? "/Discover" : ""} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Temukan</Link>
                    </li>
                    <li>
                        <Link to={"/News"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Berita</Link>
                    </li>
                    <li>
                        <Link to={"/Data"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Data</Link>
                    </li>
                </ul>
                <div className="flex justify-end items-center">
                    <RightNavBarComponent />
                </div>
            </nav>
        </>
    );
}

export default NavBar;