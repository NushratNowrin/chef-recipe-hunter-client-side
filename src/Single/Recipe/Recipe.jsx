import React from 'react';

const Recipe = (recipe) => {
    const {name, image, ingredients, cooking_method, ratings} = recipe;
    console.log(recipe)

    return (
        <div>
            <div className='mx-auto grid grid-cols-6 justify-center items-center border-solid border-2 border-neutral-950 rounded-xl overflow-hidden mb-5'>
							<div className='col-span-2 flex justify-center'>
								<img className="w-60" src={image} alt='' />
							</div>
							<div className='col-span-4 bg-neutral-950 text-white p-10 '>
								<p className='text-lg font-semibold tracking-wide mb-2 text-red-300'>
									{name}
								</p>
                                <div className="mb-2">
                                   <span className="text-yellow-300">Ingredients :</span> {ingredients[0]}, {ingredients[1]}, {ingredients[2]}, {ingredients[3]}, {ingredients[4]}
                                </div>
                                <div className="mb-2">
                                <span className="text-yellow-300">Cooking Method: </span>{cooking_method}
                                </div>
                                <div className="mb-2"><span className="text-yellow-300">Ratings:</span> {ratings}</div>
                                <div className="h-10">
                                <button className='bg-red-300 px-5 py-2 font-bold text-black rounded-lg hover:bg-red-600 ease-in-out duration-300' >
										Add to Favourites{" "}
									</button>
                                </div>
							</div>
						</div>
        </div>
    );
};

export default Recipe;