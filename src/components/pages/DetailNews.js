import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import dummyNews from "../../data/DummyNews";
import twitter from "../../assets/social/twitter.svg";
import linkedin from "../../assets/social/linkedin.svg";
import instagram from "../../assets/social/instagram.svg";
import facebook from "../../assets/social/facebook.svg";
import Logo from "../Logo";
import { useLocation } from "react-router-dom";
import api from "../../api/api";

function formatDate(date) {
    return new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}

function DetailNews() {
    const location = useLocation();
    console.log(location);
    const [detailNews, setDetailNews] = useState(null);

    useEffect(() => {
        async function getDetailNews() {
            const response = await api.get(`news/${location.state.id}`);
            setDetailNews(response.data);
        }
        getDetailNews();
        console.log(detailNews);
    }, []);

    return (
        <div>
            <NavBar />
            {
                detailNews && (
                    <>
                        <h1 className="font-medium text-3xl text-center">{detailNews.data.title}</h1>
                        <div className="flex justify-center items-center my-4 space-x-4">
                            <img src={detailNews.data.author.avatar} alt="author" className="w-6 rounded-full" />
                            <span className="font-medium text-xs">{detailNews.data.author.name} <span className="font-normal">pada {formatDate(detailNews.data.created_at)}</span></span>
                        </div>
                        <img src={detailNews.data.image} alt="news" className="w-1/2 rounded-xl mx-auto my-8" />
                        <div dangerouslySetInnerHTML={{ __html: detailNews.data.body }} className="w-2/3 font-normal text-justify mx-auto space-y-4">
                        </div>
                        <h2 className="text-GF-green text-2xl font-semibold text-center my-16">Baca Berita Lain</h2>
                        <div className="w-2/3 mx-auto">
                            {dummyNews.map((news, index) => index < 3 ? news : null)}
                        </div>
                    </>
                )
            }

            <footer className="space-y-4 mb-8">
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