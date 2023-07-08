import React from "react";

function LimitWarning() {
    return (
        <div className='z-[999] fixed m-auto top-0 bottom-0 right-0 left-0 w-fit h-fit rounded-3xl px-16 py-20 bg-white shadow-2xl'>
            <p className='text-center text-2xl font-semibold text-GF-grey'>Berlangganan GolekFood</p>
            <p className="text-center text-lg font-medium text-GF-grey">Dapatkan akses penuh fitur GolekFood dengan berlangganan</p>
            <div className="my-8 grid grid-cols-3 gap-4">
                <div className="bg-GF-grey rounded-3xl p-4">
                    <p className="text-center text-white text-2xl font-semibold">Gratis</p>
                    <p className="mb-2 text-center text-white text-lg font-semibold">Rp0/bulan</p>
                    <div className="h-0.5 bg-GF-light-grey" />
                    <p className="mt-4 text-center text-white text-lg font-semibold">Akses Terbatas</p>
                    <p className="mb-4 text-center text-white text-lg font-semibold">3x Pencarian/hari</p>
                    <button className="transition bg-GF-green hover:bg-opacity-75 rounded-2xl text-white w-full py-4">
                        Lanjutkan
                    </button>
                </div>

                <div className="bg-GF-grey rounded-3xl p-4">
                    <p className="text-center text-white text-2xl font-semibold">Bulanan</p>
                    <p className="mb-2 text-center text-white text-lg font-semibold">Rp10.000/bulan</p>
                    <div className="h-0.5 bg-GF-light-grey" />
                    <p className="mt-4 text-center text-white text-lg font-semibold">Akses Penuh</p>
                    <p className="mb-4 text-center text-white text-lg font-semibold">Pencarian tidak terbatas</p>
                    <button className="transition bg-GF-green hover:bg-opacity-75 rounded-2xl text-white w-full py-4">
                        Lanjutkan
                    </button>
                </div>

                <div className="bg-GF-grey rounded-3xl p-4">
                    <p className="text-center text-white text-2xl font-semibold">Tahunan</p>
                    <p className="mb-2 text-center text-white text-lg font-semibold">Rp100.000/tahun</p>
                    <div className="h-0.5 bg-GF-light-grey" />
                    <p className="mt-4 text-center text-white text-lg font-semibold">Akses Penuh</p>
                    <p className="mb-4 text-center text-white text-lg font-semibold">Pencarian tidak terbatas</p>
                    <button className="transition bg-GF-green hover:bg-opacity-75 rounded-2xl text-white w-full py-4">
                        Lanjutkan
                    </button>
                </div>
            </div>
            <p className="text-GF-grey font-bold text-center">Promo Spesial</p>
            <p className="text-GF-grey font-semibold text-center">Harga asli Rp50.000/bulan</p>
        </div>
    );
}

export default LimitWarning;