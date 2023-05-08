import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Recipe = (recipe) => {
	const [fold, setFold] = useState(true);
	const { name, image, ingredients, cooking_method, ratings } = recipe;
	console.log(recipe);

	const notify = () => toast("Added to Favourite");

	return (
		<div>
			<div className='mx-auto grid grid-cols-6 justify-center items-center border-solid border-2 border-neutral-950 rounded-xl overflow-hidden mb-5'>
				<div className='col-span-2 flex justify-center'>
					<img className='w-60' src={image} alt='' />
				</div>
				<div className='col-span-4 bg-neutral-950 text-white p-10 '>
					<p className='text-lg font-semibold tracking-wide mb-2 text-red-300'>
						{name}
					</p>
					<div className='mb-2'>
						<span className='text-yellow-300'>Ingredients :</span>{" "}
						{ingredients[0]}, {ingredients[1]}, {ingredients[2]},{" "}
						{ingredients[3]}, {ingredients[4]}
					</div>
					<span className='text-yellow-300'>Cooking Method: </span>
					{fold ? (
						<>
							<div className='mb-2'>
								<span>{cooking_method.substring(0, 100)}...</span>
								<span className='text-red-400' onClick={() => setFold(!fold)}>
									Read More
								</span>
							</div>
						</>
					) : (
						<>
							<span>{cooking_method}</span>
							<span className='text-red-400' onClick={() => setFold(!fold)}>
								Read Less
							</span>
						</>
					)}
					<div className='mb-2'>
						<span className='text-yellow-300'>Ratings:</span> {ratings}
					</div>
					<div className='h-10'>
						<button onClick={notify} className='bg-red-300 px-5 py-2 font-bold text-black rounded-lg hover:bg-red-600 ease-in-out duration-300'>
							Add to Favourites
						</button>
						<ToastContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
