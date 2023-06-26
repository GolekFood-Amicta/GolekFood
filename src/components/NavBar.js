import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import RightNavBarComponent from "./RightNavBarComponent";

function NavBar() {
    return (
        <nav className="sticky z-[999] top-0 flex justify-between items-center backdrop-blur px-16 py-8">
            <Logo />
            <ul className="flex space-x-8 font-semibold">
                <li>
                    <Link to={"/"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Beranda</Link>
                </li>
                <li>
                    <Link to={"/Discover"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Temukan</Link>
                </li>
                <li>
                    <Link to={"/News"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Berita</Link>
                </li>
                <li>
                    <Link to={"/Data"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Data</Link>
                </li>
            </ul>
            <RightNavBarComponent />
        </nav>
    );
}

export default NavBar;