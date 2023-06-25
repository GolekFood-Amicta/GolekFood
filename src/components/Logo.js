import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to={'/'}>
            <p className="logo text-2xl font-black text-GF-green">Golek<span className="logo text-black">Foods</span></p>
        </Link>
    );
}

export default Logo;