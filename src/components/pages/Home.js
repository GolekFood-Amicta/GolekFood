import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import vector from "../../assets/vector/vector-home.svg";
import headlineSwirl from "../../assets/headline-swirl.svg";

function Home() {
    return (
        <div>
            <NavBar />

            {/* Headline */}
            <div className="flex">
                <div className="w-1/2 h-screen pl-16 flex flex-col justify-center space-y-8">
                    <div>
                        <p className="font-bold text-7xl text-GF-grey"><span className="text-GF-green">Solusi</span> Cerdas,</p>
                        <p className="font-bold text-6xl text-GF-grey">untuk menemukan</p>
                        <p className="font-bold text-5xl text-GF-grey">makanan sehat dan tepat</p>
                    </div>
                    <p className="font-medium text-xl text-GF-light-grey">Lebih Banyak Pilihan, Lebih Banyak Kesehatan<br />GolekFoods Memiliki Semua yang Anda Butuhkan.</p>
                    <Link to={"/Discover"}>
                        <button className="bg-GF-green w-fit rounded-3xl px-6 py-4">
                            <p className="font-semibold text-lg text-white">Discover Foods</p>
                        </button>
                    </Link>
                </div>
                <div className="w-1/2 h-screen flex justify-center">
                    <img src={headlineSwirl} alt="swirl" className="absolute top-0 right-0" />
                    <img src={vector} alt="vector" className="absolute w-5/12" />
                </div>
            </div>

            {/* Why Choose Us */}

        </div>
    );
}

export default Home;