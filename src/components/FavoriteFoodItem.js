import React from 'react';

function FavoriteFoodItem({ favorite, favoriteIcon, name, image }) {
	return (
		<div className="relative">
			<button onClick={favorite} className="absolute right-0 m-2">
				<img
					src={favoriteIcon}
					alt="favorite"
					className="w-10"
				/>
			</button>
			<div className="absolute flex justify-center items-center bg-black bg-opacity-50 backdrop-blur w-full h-1/4 bottom-0 rounded-2xl">
				<p className="text-white font-medium">{name}</p>
			</div>
			<img
				src={image}
				alt="favorite-food"
				className="w-full h-60 object-cover rounded-2xl"
			/>
		</div>
	);
}

export default FavoriteFoodItem;
