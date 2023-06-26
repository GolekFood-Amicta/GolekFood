import React from "react";
import NavBar from "../NavBar";
import gizi from "../../data/gizi.json";

function Data() {
    return (
        <div className="mb-8">
            <NavBar />
            <div className="px-16">
                <table className="w-full text-center">
                    <thead className="h-16 border-b-2 border-black">
                        <tr>
                            <th>Nomor</th>
                            <th>Makanan</th>
                            <th>Lemak</th>
                            <th>Kalori</th>
                            <th>Protein</th>
                            <th>Karbohidrat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            gizi.map((data, index) => <tr className="h-12">
                                <td>{++index}</td>
                                <td>{data.nama}</td>
                                <td>{data.lemak}</td>
                                <td>{data.energi}</td>
                                <td>{data.protein}</td>
                                <td>{data.karbohidrat}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Data;