import React from "react";
import { Link } from "react-router-dom";

function SignInButton() {
    <Link to={"/SignIn"}>
        <button className="font-medium border-2 border-black px-6 py-2 rounded-xl hover:text-white hover:bg-GF-green hover:border-GF-green">
            Masuk
        </button>
    </Link>
}

export default SignInButton;