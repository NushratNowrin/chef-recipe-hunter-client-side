import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Recipe = (recipe) => {
	const [fold, setFold] = useState(true);
	const [favourite, setFavourite] = useState(false);
	const { name, image, ingredients, cooking_method, ratings } = recipe;
	// console.log(recipe);

	const handleFavBtn = () => {
		setFavourite(true);
	};

	const notify = () => toast("Added to Favourite");

	return (
		<div>
			<div className='mx-auto md:grid md:grid-cols-6 md:justify-center items-center border-solid border-2 border-neutral-950 rounded-xl overflow-hidden mb-5'>
				<div className='md:col-span-2 flex justify-center'>
					<img className='w-96 h-60' src={image} alt='' />
				</div>
				<div className='md:col-span-4 bg-neutral-950 text-white p-10 '>
					<p className='text-lg font-semibold tracking-wide mb-2 text-red-400'>
						{name}
					</p>
					<div className='mb-2'>
						<span className='text-yellow-300'>Ingredients :</span>{" "}
						{ingredients[0]}, {ingredients[1]}, {ingredients[2]},{" "}
						{ingredients[3]}, {ingredients[4]}
					</div>
					<div className='text-yellow-300'>Cooking Method: </div>
					{fold ? (
						<>
							<div className='mb-2'>
								<span>{cooking_method.substring(0, 100)}...</span>
								<span className='text-red-400 cursor-pointer' onClick={() => setFold(!fold)}>
									Read More
								</span>
							</div>
						</>
					) : (
						<>
							<div className='mb-2'>
								<span>{cooking_method}</span>
								<span className='text-red-400 cursor-pointer' onClick={() => setFold(!fold)}>
									Read Less
								</span>
							</div>
						</>
					)}
					<div className='mb-2'>
						<span className='text-yellow-300'>Ratings:</span> {ratings}
					</div>
					<div onClick={notify} className='h-10'>
						{favourite ? (
							<button
								className='px-5 py-2 font-bold rounded-lg bg-white text-slate-500'
								disabled>
								Add to Favourites
							</button>
						) : (
							<button
								onClick={handleFavBtn}
								className='bg-red-400 px-5 py-2 font-bold text-black rounded-lg button-hover'>
								Add to Favourites
							</button>
						)}

						<ToastContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
