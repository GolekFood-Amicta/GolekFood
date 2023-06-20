import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import NewsItem from "./NewsItem";

const newsItems = [
    <NewsItem
        title={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        body={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsImage={'https://picsum.photos/seed/picsum/300'}
        author={'Anas Fikri Hanif'}
        authorImage={'https://picsum.photos/200'}
    />,
    <NewsItem
        title={'Kandungan gula pada makanan ini sangat berbahaya'}
        body={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsImage={'https://picsum.photos/seed/picsum/300'}
        author={'Anas Fikri Hanif'}
        authorImage={'https://picsum.photos/200'}
    />,
    <NewsItem
        title={'Terlalu banyak memakan eskrim beresiko diabetes!'}
        body={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsImage={'https://picsum.photos/seed/picsum/300'}
        author={'Anas Fikri Hanif'}
        authorImage={'https://picsum.photos/200'}
    />,
    <NewsItem
        title={'Terlalu banyak memakan eskrim beresiko diabetes!'}
        body={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsImage={'https://picsum.photos/seed/picsum/300'}
        author={'Anas Fikri Hanif'}
        authorImage={'https://picsum.photos/200'}
    />,
    <NewsItem
        title={'Kandungan gula pada makanan ini sangat berbahaya'}
        body={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsImage={'https://picsum.photos/seed/picsum/300'}
        author={'Anas Fikri Hanif'}
        authorImage={'https://picsum.photos/200'}
    />,
    <NewsItem
        title={'Bahaya! makanan ini ternyata memiliki kalori tertinggi'}
        body={'Siapa sangka makanan yang sering kita makan sehari-hari ternyata memiliki kandungan kalori yang sangat tinggi, dan berbahaya bagi...'}
        newsImage={'https://picsum.photos/seed/picsum/300'}
        author={'Anas Fikri Hanif'}
        authorImage={'https://picsum.photos/200'}
    />,
];

function Items({ currentItems }) {
    return (
        <>
            {currentItems && currentItems.map((item) => (
                <>
                    {item}
                </>
            ))}
        </>
    );
}

function NewsPaginate({ newsItemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + newsItemsPerPage;
    const currentItems = newsItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(newsItems.length / newsItemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * newsItemsPerPage) % newsItems.length;
        setItemOffset(newOffset);
    }

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakAriaLabels="..."
                nextLabel="Next"
                nextClassName="hover:font-semibold"
                onPageChange={handlePageClick}
                activeClassName="border border-black px-4 py-2 rounded-lg"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                pageClassName="hover:font-semibold"
                previousLabel="Prev"
                previousClassName="hover:font-semibold"
                renderOnZeroPageCount={null}
                className="flex space-x-10 items-center"
            />
        </>
    );
}

export default NewsPaginate;