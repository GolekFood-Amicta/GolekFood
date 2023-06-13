import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

class Discover extends React.Component {
    render() {
        return (
            <div className="px-16 py-8">
                <nav className="flex justify-between items-center">
                    <ul className="flex space-x-8">
                        <li>Home</li>
                        <li>Discover</li>
                        <li>News</li>
                        <li>Data</li>
                    </ul>
                    <Link to={"/SignIn"}>
                        <button className="font-semibold border-2 border-black px-6 py-2 rounded-xl hover:text-white hover:bg-GF-green hover:border-GF-green">
                            Sign In
                        </button>
                    </Link>
                </nav>

                <div className="flex py-16">
                    <div className="w-1/3 pr-4">
                        <p>Discover your next favorite healthy meal with just a <span className="font-semibold">few clicks</span> with GolekFoods.</p>
                        <div className="my-16 space-y-4">
                            <p>Fat</p>
                            <div className="flex items-center space-x-4">
                                <input type="range" className="accent-black h-0.5 w-[500px]" />
                                <span>Low</span>
                            </div>

                            <p>Calories</p>
                            <div className="flex items-center space-x-4">
                                <input type="range" className="accent-black h-0.5 w-[500px]" />
                                <span>Med</span>
                            </div>

                            <p>Proteins</p>
                            <div className="flex items-center space-x-4">
                                <input type="range" className="accent-black h-0.5 w-[500px]" />
                                <span>High</span>
                            </div>

                            <p>Carbohydrates</p>
                            <div className="flex items-center space-x-4">
                                <input type="range" className="accent-black h-0.5 w-[500px]" />
                                <span>Low</span>
                            </div>
                        </div>
                        <button className="font-semibold text-white bg-black w-full py-4 rounded-xl hover:bg-GF-green">Discover Foods</button>
                    </div>
                    <div className="w-2/3 pl-4">

                    </div>
                </div>
            </div>
        );
    }
}

export default Discover;