import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import vector from "../../assets/vector/vector-news.svg";
import api from "../../api/api";
import NewsItem from "../NewsItem";
import apiBaseURL from "../../api/apiBaseURL";

function News() {
    let [news, setNews] = useState(null);
    let [page, setPage] = useState(1);
    const pageIndex = [];

    useEffect(() => {
        async function getNews() {
            const response = await api.get(`news?page=${page}`);
            setNews(response.data);
        }
        getNews();
    }, [page]);

    const next = () => {
        setPage(page = page + 1);

    }

    const prev = () => {
        setPage(page = page - 1);
    }

    if (news) {
        for (let index = 1; index <= news.data.last_page; index++) {
            pageIndex.push(index);
        }
    }

    return (
        <div className="mb-8">
            <NavBar />
            <div className="flex">
                <div className="w-1/2 pl-16 pr-8 pt-8 pb-8">
                    <p className="text-sm w-1/2">Temukan berita dan informasi <span className="font-semibold">makanan sehat</span>, menarik, dan terbaru.</p>
                    {
                        news && (
                            <>
                                {
                                    news.data.data.map((item) => (
                                        <NewsItem
                                            key={item.id}
                                            title={item.title}
                                            body={item.body}
                                            newsImage={`${apiBaseURL}storage/image/${item.image}`}
                                            author={item.author.name}
                                            authorImage={`${apiBaseURL}storage/image/${item.author.avatar}`}
                                            link={'/DetailNews'}
                                            state={{
                                                id: item.id
                                            }}
                                        />
                                    ))
                                }
                                <div className="flex space-x-10 w-full fixed left-0 bottom-0 bg-white pl-16 py-4">
                                    {
                                        news.data.current_page !== 1 ? <button onClick={prev} className="text-sm font-medium">Sebelumnya</button> : null
                                    }
                                    {
                                        pageIndex.map((pageNumber, index) => (
                                            <button onClick={() => setPage(page = pageNumber)} className={`text-sm font-medium px-4 py-2 rounded-xl ${page === index + 1 ? 'border-2 border-black' : ''}`}>{pageNumber}</button>
                                        ))
                                    }
                                    {
                                        news.data.current_page !== news.data.last_page ? <button onClick={next} className="text-sm font-medium">Selanjutnya</button> : null
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="w-1/2 px-8">
                    <img src={vector} alt="vector" className="fixed w-5/12 right-10" />
                </div>
            </div>
        </div>
    );
}

export default News;