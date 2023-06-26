import React, { useState } from 'react';
import NavBar from '../NavBar';
import gizi from '../../data/gizi.json';

function Data() {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortOrder, setSortOrder] = useState('asc'); // asc for ascending, desc for descending

	const filteredGizi = gizi
		.filter((data) =>
			data.nama.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.sort((a, b) => {
			// Sorting based on the selected sort order
			if (sortOrder === 'asc') {
				return a.nama.localeCompare(b.nama);
			} else {
				return b.nama.localeCompare(a.nama);
			}
		});

	const clearSearch = () => {
		setSearchTerm('');
	};

	const toggleSortOrder = () => {
		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
	};

	return (
		<div className="mb-8">
			<NavBar />
			<div className="flex flex-col items-center px-16">
				<div className="fixed w-full flex justify-center items-center backdrop-blur">
					<div className="w-1/3 relative">
						<input
							type="text"
							placeholder="Cari Makanan"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-10 pr-10 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-GF-green w-full"
						/>
						{searchTerm && (
							<button
								className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-400 focus:outline-none"
								onClick={clearSearch}
							>
								<svg
									className="w-4 h-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M16.707 3.293a1 1 0 00-1.414 0L10 8.586 4.707 3.293a1 1 0 00-1.414 1.414L8.586 10l-5.293 5.293a1 1 0 001.414 1.414L10 11.414l5.293 5.293a1 1 0 001.414-1.414L11.414 10l5.293-5.293a1 1 0 000-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						)}
					</div>
				</div>
				<div className="mt-14 fixed w-full flex justify-center backdrop-blur">
					<button
						className="px-4 py-2 rounded-md bg-GF-green text-white focus:outline-none"
						onClick={toggleSortOrder}
					>
						{sortOrder === 'asc' ? 'Sort Ascending' : 'Sort Descending'}
					</button>
				</div>
				<table className="w-full text-center mt-24">
					<thead className="h-16 border-b-2 border-black sticky top-52 bg-white">
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
						{filteredGizi.map((data, index) => (
							<tr className="h-12" key={index}>
								<td>{++index}</td>
								<td>{data.nama}</td>
								<td>{data.lemak}</td>
								<td>{data.energi}</td>
								<td>{data.protein}</td>
								<td>{data.karbohidrat}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Data;
