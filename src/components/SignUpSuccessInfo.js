import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";

function SignUpSuccessInfo({ className }) {
    return (
        <div className={className}>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets5.lottiefiles.com/packages/lf20_vOw8d0zc1F.json"
                style={{
                    width: "300px",
                    height: "300px"
                }}
            />
            <p className="font-bold text-lg text-center mb-4">Akun Anda berhasil didaftarkan</p>
            <p className="font-medium text-center">Silahkan ke halaman Sign In untuk masuk dengan akun Anda</p>
            <Link to={'/SignIn'}>
                <button className="w-full mt-4 py-4 rounded-xl bg-GF-green text-white font-medium hover:bg-opacity-90">
                    Masuk
                </button>
            </Link>
        </div>
    );
}

export default SignUpSuccessInfo;
