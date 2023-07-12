import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import api from "../../api/api";
import Logo from "../Logo";
import vector from "../../assets/vector/vector-home.svg";
import twitter from "../../assets/social/twitter.svg";
import linkedin from "../../assets/social/linkedin.svg";
import instagram from "../../assets/social/instagram.svg";
import facebook from "../../assets/social/facebook.svg";
import { useState } from "react";

function FavoriteFoodItemByUser({ foodName, foodImage, fatValue, calValue, proValue, carboValue }) {
    return (
        <div className="relative w-11/12 h-[500px]">
            <div className="absolute w-full h-fit bottom-0 left-0 rounded-2xl bg-black bg-opacity-50 backdrop-blur text-white">
                <p className="pt-2 font-medium text-lg text-center">{foodName}</p>
                <div className="p-4 grid grid-cols-6 gap-2">
                    <span className="col-span-2">{fatValue} g</span>
                    <span className="col-span-4">Lemak</span>
                    <span className="col-span-2">{calValue} kal</span>
                    <span className="col-span-4">Kalori</span>
                    <span className="col-span-2">{proValue} g</span>
                    <span className="col-span-4">Protein</span>
                    <span className="col-span-2">{carboValue} g</span>
                    <span className="col-span-4">Karbohidrat</span>
                </div>
            </div>
            <img src={foodImage} alt="food" className="w-full h-[500px] object-cover rounded-2xl" />
        </div>
    );
}

const reviews = [
    <div className="rounded-3xl bg-white mx-4 px-8 pt-16 pb-8 w-full">
        <p className="text-2xl font-medium">Lina Blackpink</p>
        <p className="text-sm font-medium">22 Years</p>
        <p className="mt-4">The salad absolutely fresh!!! Rekomendasi makanannya cocok buat aku yang pengen diet sehat. Pokoknya  rekomendasi buat semua kalangan</p>
    </div>,
    <div className="rounded-3xl bg-white mx-4 px-8 pt-16 pb-8 w-full">
        <p className="text-2xl font-medium">Lina Blackpink</p>
        <p className="text-sm font-medium">22 Years</p>
        <p className="mt-4">The salad absolutely fresh!!! Rekomendasi makanannya cocok buat aku yang pengen diet sehat. Pokoknya  rekomendasi buat semua kalangan</p>
    </div>,
    <div className="rounded-3xl bg-white mx-4 px-8 pt-16 pb-8 w-full">
        <p className="text-2xl font-medium">Lina Blackpink</p>
        <p className="text-sm font-medium">22 Years</p>
        <p className="mt-4">The salad absolutely fresh!!! Rekomendasi makanannya cocok buat aku yang pengen diet sehat. Pokoknya  rekomendasi buat semua kalangan</p>
    </div>
];

const favoriteFoodByUser = [
    <FavoriteFoodItemByUser
        foodName={'Abon'}
        foodImage={"https://img-cdn.medkomtek.com/PbrY9X3ignQ8sVuj_LU9UXljyew=/0x0/smart/filters:quality(75):strip_icc():format(webp)/article/7g8ceHGDNMuttlBcXEl8d/original/099726800_1605161502-Mana-yang-Lebih-Sehat-Abon-Sapi-atau-Abon-Ayam-shutterstock_1361446550.jpg"}
        fatValue={28.4}
        calValue={280}
        proValue={9.2}
        carboValue={0}
    />,
    <FavoriteFoodItemByUser
        foodName={'Sate Bandeng'}
        foodImage={"https://asset.kompas.com/crops/4UfXhXtR7hK2atnUpqKRHGbhFuk=/3x0:700x465/750x500/data/photo/2021/02/16/602b2a91ca7f1.jpg"}
        fatValue={16.8}
        calValue={283}
        proValue={12.1}
        carboValue={20.9}
    />,
    <FavoriteFoodItemByUser
        foodName={'Ikan Bandeng Presto'}
        foodImage={"https://www.philips.com/c-dam/b2c/id_ID/experience/ho/cooking/iikan-goreng-thumbnail.jpg"}
        fatValue={20.3}
        calValue={296}
        proValue={17.1}
        carboValue={11.3}
    />,
]

function Home() {
    const [favoriteFood, setFavoriteFood] = useState(null);
    const [warning, setWarning] = useState(false);

    const showWarning = () => {
        if (!localStorage.getItem('user_id')) {
            setWarning(true);
        }
    }

    const hideWarning = () => {
        setWarning(false);
    }

    // useEffect(() => {
    //     async function getFavoriteFood() {
    //         const response = await api.get('favourite');
    //         setFavoriteFood(response.data);
    //     }
    //     getFavoriteFood();
    // }, []);

    return (
        <div>
            <NavBar />
            <div className={`${warning === false ? 'hidden' : ''} z-[999] fixed shadow m-auto top-0 bottom-0 left-0 right-0 w-1/4 h-fit bg-white rounded-3xl p-8`}>
                <div className="flex justify-end">
                    <button onClick={hideWarning} className="text-2xl">&times;</button>
                </div>
                <p className="my-4 text-justify">Untuk menggunakan fitur <span className="font-bold text-GF-green">Temukan Makanan</span>, silahkan masuk terlebih dahulu menggunakan akun Anda.</p>
                <Link to={'/SignIn'}>
                    <button className="w-full py-4 bg-GF-green text-white rounded-xl transition hover:bg-opacity-75">
                        Masuk
                    </button>
                </Link>
            </div>
            {
                warning === true ? <div className="z-[700] fixed backdrop-blur w-screen h-screen" /> : null
            }

            {/* Headline */}
            <section className="flex">
                <div className="w-1/2 h-screen pl-16 flex flex-col justify-center space-y-8">
                    <div>
                        <p className="font-bold text-7xl text-GF-grey"><span className="text-GF-green">Solusi</span> Cerdas,</p>
                        <p className="font-bold text-6xl text-GF-grey">untuk menemukan</p>
                        <p className="font-bold text-5xl text-GF-grey">makanan sehat dan tepat</p>
                    </div>
                    <p className="font-medium text-xl text-GF-light-grey">Lebih Banyak Pilihan, Lebih Banyak Kesehatan<br />GolekFood Memiliki Semua yang Anda Butuhkan.</p>
                    <Link onClick={showWarning} to={localStorage.getItem('user_id') ? "/Discover" : ""}>
                        <button className="bg-GF-green w-fit rounded-3xl px-6 py-4">
                            <p className="font-semibold text-lg text-white">Cari Makanan</p>
                        </button>
                    </Link>
                </div>
                <div className="w-1/2 h-screen flex justify-center">
                    <img src={vector} alt="vector" className="absolute w-5/12" />
                </div>
            </section>

            {/* Review */}
            <section className="px-16 py-8 bg-gradient-to-br from-[#32B56A] to-[#57BC53]">
                <p className="text-4xl text-white font-semibold mb-8">Review Menarik<br />Tentang <span className="font-extrabold">GolekFoods</span></p>
                <Carousel
                    slides={reviews}
                    plugins={[
                        'centered',
                        'infinite',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000
                            }
                        },
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            }
                        }
                    ]}
                    animationSpeed={1000}
                />
            </section>

            {/* Favorite Foods */}
            <section className="px-16 py-20">
                <p className="text-center mb-16 font-semibold text-4xl text-GF-grey">Makanan <span className="text-GF-green">Favorit Pilihan</span> Pengguna</p>
                <Carousel
                    slides={
                        favoriteFoodByUser
                    }
                    plugins={[
                        'centered',
                        'infinite',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000
                            }
                        },
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            }
                        }
                    ]}
                    animationSpeed={1000}
                />
            </section>

            {/* News Subscription */}
            <section className="p-16">
                <div className="bg-gradient-to-br from-[#32B56A] to-[#57BC53] py-20 rounded-3xl">
                    <p className="text-xl font-semibold text-white text-center mb-8">Langganan Berita</p>
                    <p className="text-3xl font-semibold text-white text-center mb-12">Dapatkan informasi terbaru<br />perkembangan GolekFood melalui email</p>
                    <div className="w-1/2 m-auto flex justify-between p-2 rounded-full bg-white">
                        <input placeholder="Masukan alamat email" className="placeholder:text-lg text-GF-grey px-4 bg-transparent rounded-full w-full mr-2 outline-none" />
                        <button className="bg-GF-green hover:bg-opacity-75 transition text-lg font-medium text-white rounded-full px-8 py-4 ml-2">Langganan</button>
                    </div>
                </div>
            </section>

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

export default Home;