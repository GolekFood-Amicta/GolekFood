import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="flex justify-between items-center">
            <ul className="flex space-x-8 font-semibold text-GF-soft-green">
                <li>
                    <Link className="focus:font-extrabold">Home</Link>
                </li>
                <li>
                    <Link className="focus:font-extrabold">Discover</Link>
                </li>
                <li>
                    <Link className="focus:font-extrabold">News</Link>
                </li>
                <li>
                    <Link className="focus:font-extrabold">Data</Link>
                </li>
            </ul>
            <Link to={"/SignIn"}>
                <button className="font-medium text-GF-soft-green border-2 border-GF-soft-green px-6 py-2 rounded-xl hover:text-white hover:bg-GF-green hover:border-GF-green">
                    Sign In
                </button>
            </Link>
        </nav>
    );
}

export default NavBar;