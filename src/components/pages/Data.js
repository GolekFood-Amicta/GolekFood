import React, { useState } from 'react';
import NavBar from '../NavBar';
import gizi from '../../data/gizi.json';

function Data() {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortName, setSortName] = useState('asc');

	const filteredGizi = gizi
		.filter((data) =>
			data.nama.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.sort((a, b) => {
			if (sortName === 'asc') {
				return a.nama.localeCompare(b.nama);
			} else {
				return b.nama.localeCompare(a.nama);
			}
		})

	const clearSearch = () => {
		setSearchTerm('');
	};

	const toggleSortName = () => {
		setSortName(sortName === 'asc' ? 'desc' : 'asc');
	};

	return (
		<div className="mb-8">
			{/* <NavBar /> */}

			<div className="sticky top-[100px] backdrop-blur w-full flex justify-center items-center space-x-4">
				<input
					type="text"
					placeholder="Cari Makanan"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="pl-5 pr-5 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-GF-green w-1/3"
				/>
				<button
					className="text-gray-400 text-2xl focus:outline-none"
					onClick={clearSearch}
				>
					&times;
				</button>
			</div>

			<div className='px-16'>
				<table className="w-full text-left">
					<thead className="h-16 sticky top-[143px] backdrop-blur">
						<tr>
							<th>Nomor</th>
							<th>Makanan
								<button
									className="ml-4 px-1 rounded-md border-2 border-GF-grey text-white focus:outline-none"
									onClick={toggleSortName}
								>
									{
										sortName === 'asc' ?
											<div>
												<span className='text-GF-green font-black'>&uarr;</span>
												<span className='text-black font-black'>&darr;</span>
											</div>
											:
											<div>
												<span className='text-black font-black'>&uarr;</span>
												<span className='text-GF-green font-black'>&darr;</span>
											</div>
									}
								</button>
							</th>
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
