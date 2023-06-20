import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
    return (
        <nav className="sticky z-[999] top-0 flex justify-between items-center backdrop-blur px-16 py-8">
            <Logo />
            <ul className="flex space-x-8 font-semibold">
                <li>
                    <Link to={"/"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Home</Link>
                </li>
                <li>
                    <Link to={"/Discover"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Discover</Link>
                </li>
                <li>
                    <Link to={"/News"} className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">News</Link>
                </li>
                <li>
                    <Link className="text-GF-grey hover:font-extrabold focus:font-extrabold focus:text-GF-green">Data</Link>
                </li>
            </ul>
            <Link to={"/SignIn"}>
                <button className="font-medium border-2 border-black px-6 py-2 rounded-xl hover:text-white hover:bg-GF-green hover:border-GF-green">
                    Sign In
                </button>
            </Link>
        </nav>
    );
}

export default NavBar;