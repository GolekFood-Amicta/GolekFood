import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import bri from '../../assets/payment/bri.svg';
import bca from '../../assets/payment/bca.svg';
import dana from '../../assets/payment/dana.svg';
import gopay from '../../assets/payment/gopay.svg';
import api from "../../api/api";
import * as LottiePlayer from '@lottiefiles/lottie-player';

class Subscription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            va: null,
            price: 0,
            plan: "",
            payment: "",
            image: null,
            confirmResponse: null,
        }

        this.setSubscription = this.setSubscription.bind(this);
        this.setPayment = this.setPayment.bind(this);
        this.handleProof = this.handleProof.bind(this);
        this.handleConfirmPayment = this.handleConfirmPayment.bind(this);

    }

    setSubscription(event, price, plan) {
        this.setState(() => {
            return {
                price: price,
                plan: plan
            }
        })
    }

    setPayment(event, payment) {
        this.setState(() => {
            return {
                payment: payment,
            }
        })
    }

    handleProof(event) {
        console.log(event.target.files);
        this.setState(() => {
            return {
                image: event.target.files[0],
            }
        })
    }

    async handleConfirmPayment(event) {
        const confirmData = new FormData();
        confirmData.append('user_id', localStorage.getItem('user_id'));
        confirmData.append('subscription', this.state.plan);
        confirmData.append('file', this.state.image);

        const response = await api.post('request-subscription', confirmData);

        this.setState(() => {
            return {
                confirmResponse: response.data,
                price: 0,
                plan: "",
            }
        })

        console.log(confirmData);
        console.log(this.state.confirmResponse);
    }

    render() {
        console.log(this.state.price);
        return (
            <div>
                <NavBar />
                <form onSubmit={this.handleConfirmPayment}>
                    {
                        this.state.price > 0
                            ?
                            <div className="z-[999] px-20 py-10 w-fit h-fit bg-white m-auto fixed shadow-2xl rounded-3xl top-0 bottom-0 left-0 right-0">
                                <p className="text-center text-2xl font-semibold mb-8">Detail Pembayaran</p>
                                <p className="text-center text-3xl font-medium mb-4">Langganan Bulanan</p>
                                <div className="h-0.5 bg-black" />
                                <p className="text-5xl text-center text my-4 space-x-4">
                                    {
                                        this.state.payment === "BRI" ?
                                            <>
                                                <span>1236</span>
                                                <span>1014</span>
                                                <span>1321</span>
                                                <span>3521</span>
                                            </>
                                            : null
                                    }
                                    {
                                        this.state.payment === "BCA" ?
                                            <>
                                                <span>423</span>
                                                <span>065</span>
                                                <span>2606</span>
                                            </>
                                            : null
                                    }
                                    {
                                        this.state.payment === "Dana" ?
                                            <>
                                                <span>0878</span>
                                                <span>3065</span>
                                                <span>1889</span>
                                            </>
                                            : null
                                    }
                                    {
                                        this.state.payment === "Gopay" ?
                                            <>
                                                <span>0878</span>
                                                <span>3065</span>
                                                <span>1889</span>
                                            </>
                                            : null
                                    }
                                </p>
                                <p className="text-center text-xl font-medium mb-4">Total Pembayaran : Rp{this.state.price}</p>
                                <div>
                                    <button onClick={(event) => this.setPayment(event, "BRI")}>
                                        <img src={bri} alt="payment" />
                                    </button>
                                    <button onClick={(event) => this.setPayment(event, "BCA")}>
                                        <img src={bca} alt="payment" />
                                    </button>
                                    <button onClick={(event) => this.setPayment(event, "Dana")}>
                                        <img src={dana} alt="payment" />
                                    </button>
                                    <button onClick={(event) => this.setPayment(event, "Gopay")}>
                                        <img src={gopay} alt="payment" />
                                    </button>
                                </div>
                                <div className="h-0.5 bg-black my-4" />
                                <p className="text-xl font-semibold">Bukti Transfer</p>
                                <input type="file" name="file" required={true} onChange={(event) => this.handleProof(event)} className="file:transition file:bg-black file:hover:bg-opacity-75 file:border-none file:rounded-xl file:font-medium file:text-white file:py-2 file:px-4 file:mr-6 file:hover:cursor-pointer font-medium my-4" />
                                <div className="h-0.5 bg-black" />
                                <button type="submit" onClick={this.handleConfirmPayment} className="transition w-full py-4 my-4 bg-GF-green hover:opacity-75 text-white rounded-xl">
                                    Konfirmasi Pembayaran
                                </button>
                            </div>
                            :
                            null
                    }
                    {
                        this.state.confirmResponse && this.state.confirmResponse.success === true
                            ?
                            <div className="z-[999] p-10 w-fit h-fit bg-white m-auto fixed shadow-2xl rounded-3xl top-0 bottom-0 left-0 right-0">
                                <p className="text-3xl font-semibold text-center">Terima kasih telah berlangganan</p>
                                <p className="text-2xl text-center">Pembayaranmu sedang diproses</p>
                                <lottie-player
                                    autoplay
                                    loop
                                    mode="normal"
                                    src="https://assets5.lottiefiles.com/packages/lf20_vOw8d0zc1F.json"
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        margin: "auto"
                                    }}
                                />
                                <Link to={'/'}>
                                    <button className="transition w-full py-4 m-auto text-white font-medium text-lg rounded-xl bg-GF-green hover:opacity-75">Ke Beranda</button>
                                </Link>
                            </div>
                            :
                            null
                    }
                    <div className={`${this.state.price > 0 ? 'blur' : 'blur-none'}`}>
                        <p className='text-center text-2xl font-semibold text-GF-grey'>Berlangganan GolekFood</p>
                        <p className="text-center text-lg font-medium text-GF-grey">Dapatkan akses penuh fitur GolekFood dengan berlangganan</p>
                        <div className="w-2/3 m-auto my-8 grid grid-cols-3 gap-4">
                            <div className="bg-GF-grey rounded-3xl p-4">
                                <p className="text-center text-white text-2xl font-semibold">Gratis</p>
                                <p className="mb-2 text-center text-white text-lg font-semibold">Rp0/bulan</p>
                                <div className="h-0.5 bg-GF-light-grey" />
                                <p className="mt-8 text-center text-white text-lg font-semibold">Akses Terbatas</p>
                                <p className="mb-8 text-center text-white text-lg font-semibold">3x Pencarian/hari</p>
                                <Link to={'/Discover'}>
                                    <button className="transition text-2xl font-semibold bg-GF-green hover:bg-opacity-75 rounded-2xl text-white w-full py-4">
                                        Lanjutkan
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-GF-grey rounded-3xl p-4">
                                <p className="text-center text-white text-2xl font-semibold">Bulanan</p>
                                <p className="mb-2 text-center text-white text-lg font-semibold">Rp10.000/bulan</p>
                                <div className="h-0.5 bg-GF-light-grey" />
                                <p className="mt-8 text-center text-white text-lg font-semibold">Akses Penuh</p>
                                <p className="mb-8 text-center text-white text-lg font-semibold">Pencarian tidak terbatas</p>
                                <button onClick={(event) => this.setSubscription(event, 10000, "Bulanan")} className="transition text-2xl font-semibold bg-GF-green hover:bg-opacity-75 rounded-2xl text-white w-full py-4">
                                    Lanjutkan
                                </button>
                            </div>

                            <div className="bg-GF-grey rounded-3xl p-4">
                                <p className="text-center text-white text-2xl font-semibold">Tahunan</p>
                                <p className="mb-2 text-center text-white text-lg font-semibold">Rp100.000/tahun</p>
                                <div className="h-0.5 bg-GF-light-grey" />
                                <p className="mt-8 text-center text-white text-lg font-semibold">Akses Penuh</p>
                                <p className="mb-8 text-center text-white text-lg font-semibold">Pencarian tidak terbatas</p>
                                <button onClick={(event) => this.setSubscription(event, 100000, "Tahunan")} className="transition text-2xl font-semibold bg-GF-green hover:bg-opacity-75 rounded-2xl text-white w-full py-4">
                                    Lanjutkan
                                </button>
                            </div>
                        </div>
                        <p className="text-GF-grey font-bold text-center">Promo Spesial</p>
                        <p className="text-GF-grey font-semibold text-center">Harga asli Rp50.000/bulan</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Subscription;