import React from "react";
import NavBar from "../NavBar";
import dummyNews from "../../data/DummyNews";
import twitter from "../../assets/social/twitter.svg";
import linkedin from "../../assets/social/linkedin.svg";
import instagram from "../../assets/social/instagram.svg";
import facebook from "../../assets/social/facebook.svg";
import Logo from "../Logo";

function DetailNews() {
    return (
        <div>
            <NavBar />
            <h1 className="font-medium text-3xl text-center">Bahaya! makanan ini ternyata memiliki kalori tertinggi</h1>
            <div className="flex justify-center items-center my-4 space-x-4">
                <img src="https://picsum.photos/200" alt="author" className="w-6 rounded-full" />
                <span className="font-medium text-xs">Anas Fikri Hanif <span className="font-normal">pada 21 Juni 2023</span></span>
            </div>
            <img src="https://img.my-best.id/content_section/beforehand_tips/4e0654064c1f4f6c6f82ca43010f122e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=a3da0b23fcedeb9e0f0e9f86034c1225" alt="news" className="w-1/2 rounded-xl mx-auto my-8" />
            <div className="w-2/3 font-normal text-justify mx-auto space-y-4 indent-8">
                <p>
                    <span className="font-semibold text-GF-green">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Suspendisse nec mi sagittis, fermentum erat et, gravida quam. Cras congue mi vitae mi euismod convallis. Proin odio sapien, posuere sit amet nisi molestie, elementum porta tortor. Nam nec mattis orci. Vivamus quam odio, sagittis eu erat id, ornare tincidunt erat. Nullam orci felis, tempor a placerat ac, venenatis sit amet odio. Praesent porttitor molestie ligula commodo laoreet. Pellentesque ornare mauris ut ex aliquet aliquam. Sed varius vitae orci vel laoreet. Curabitur nunc diam, consequat in accumsan et, fringilla id mi. Fusce eu leo ornare, blandit leo in, suscipit lectus. Vivamus vestibulum cursus metus ut tempus.
                </p>
                <p>
                    Nam imperdiet vulputate laoreet. Mauris vitae massa nunc. Donec suscipit hendrerit sem, hendrerit facilisis odio pharetra at. Proin at faucibus risus. Integer quis pulvinar est. Fusce sit amet molestie dolor. Vestibulum hendrerit mi sed justo pellentesque fringilla.
                </p>
                <p>
                    Nullam iaculis gravida elit at convallis. Vestibulum efficitur nibh ex, vitae ornare est scelerisque eu. Duis blandit sapien eu enim blandit vehicula. Proin non lorem at quam feugiat venenatis. Donec hendrerit, purus sit amet aliquam interdum, turpis neque imperdiet lacus, eget laoreet ante enim vehicula diam. Curabitur lacinia eleifend ipsum sit amet commodo. Maecenas ut massa arcu. Phasellus volutpat congue nisi, quis luctus urna lacinia et. Nulla metus ante, cursus quis dolor a, maximus eleifend lorem. Quisque venenatis nunc at purus placerat, nec ullamcorper nibh molestie.
                </p>
                <p>
                    Nunc accumsan quis neque et vehicula. Ut eleifend porttitor gravida. Donec tincidunt luctus elit, sit amet elementum magna ornare et. Quisque luctus, eros vel vehicula pretium, tellus est lacinia odio, aliquam fermentum leo diam sit amet lectus. Duis quam turpis, rhoncus at odio in, cursus congue diam. In hac habitasse platea dictumst. Nullam lobortis nibh magna, eget finibus libero facilisis eget.
                </p>
                <p>
                    Curabitur ligula ligula, congue ut ligula vel, facilisis porta eros. Suspendisse molestie est sit amet lectus varius hendrerit. Nunc viverra laoreet mauris eu vulputate. Aliquam ante neque, tristique ac elit ut, posuere commodo erat. Fusce vitae risus sed lorem commodo viverra vitae in elit. Sed et diam eget justo aliquam efficitur et id lacus. Mauris scelerisque metus in erat malesuada euismod.
                </p>
            </div>
            <h2 className="text-GF-green text-2xl font-semibold text-center my-16">Baca Berita Lain</h2>
            <div className="w-2/3 mx-auto">
                {dummyNews.map((news, index) => index < 3 ? news : null)}
            </div>
            <footer className="space-y-4 mb-8">
                {/* <p className="font-black text-2xl text-GF-grey text-center"><span className="text-GF-green">GOLEK</span>FOODS</p> */}
                <div className="flex justify-center mt-8">
                    <Logo />
                </div>
                <p className="text-center">Temukan Kami</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="twitter" className="w-6 h-fit" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin" className="w-6 h-fit" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="instagram" className="w-6 h-fit" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="facebook" className="w-6 h-fit" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default DetailNews;