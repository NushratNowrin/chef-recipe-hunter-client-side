import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";
import Spinner from "../Shared/Spinner/Spinner";
import Recipe from "../../Single/Recipe/Recipe";

const ChefDetails = () => {
	const [recipes, setRecipes] = useState([])
    const [fold, setFold] = useState(true)

	const { id, image, name, experience, description, recipe, likes } =
		useLoaderData();

	useEffect(() => {
		fetch(`https://chef-recipe-hunter-server-side-nowrin2023-gmailcom.vercel.app/recipes/${id}`)
			.then((res) => res.json())
			.then((data) => setRecipes(data));
	}, [id]);

	// spinner
	const navigation = useNavigation();
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}

	return (
		<div>
			{/* Banner */}
			<div className='md:grid md:grid-cols-5 justify-center items-center gap-2 bg-neutral-100 md:px-20 pt-40'>
				<div className='md:col-span-2	'>
					<img className='h-96' src={image} alt='' />
				</div>
				<div className='md:col-span-3 bg-neutral-950 rounded-r-3xl p-10 text-white text-left '>
					<p className='text-md font-semibold tracking-wide mb-4 text-red-400'>
						{name}
					</p>
					<div className='text-sm text-white mb-4'>{description}</div>

					<div className='md:flex'>
						<div className='flex items-center gap-1 mb-2'>
							<GiCookingPot className='text-red-400 text-xl' />
							<p>{experience} Years of experience</p>
						</div>
						<div className='flex items-center gap-1 mb-1 md:ml-5'>
							<MdFastfood className='text-yellow-300' />
							<p>{recipe} Recipes</p>
						</div>

						<div className='flex items-center gap-1 mb-1 md:ml-5'>
							<AiFillLike className='text-blue-500' />
							<p>{likes}</p>
						</div>
					</div>
				</div>
			</div>

			{/* Recipe */}
			<div className='bg-neutral-100 rounded-b-lg gap-8 p-8 pb-16 items-center justify-center'>
				{recipes.map((recipe) => (
					<Recipe key={recipe.id} {...recipe}>
						{/* <div className='mx-auto grid grid-cols-6 justify-center items-center border-solid border-2 border-neutral-950 rounded-xl overflow-hidden mb-5'>
							<div className='col-span-2 flex justify-center'>
								<img className="w-60" src={recipe.image} alt='' />
							</div>
							<div className='col-span-4 bg-neutral-950 text-white p-10 '>
								<p className='text-lg font-semibold tracking-wide mb-2 text-red-400'>
									{recipe.name}
								</p>
                                <div className="mb-2">
                                   <span className="text-yellow-300">Ingredients :</span> {recipe.ingredients[0]}, {recipe.ingredients[1]}, {recipe.ingredients[2]}, {recipe.ingredients[3]}, {recipe.ingredients[4]}
                                </div>
                                <div className="mb-2">
                                <span className="text-yellow-300">Cooking Method: </span>{recipe.cooking_method}
                                </div>
                                <div className="mb-2"><span className="text-yellow-300">Ratings:</span> {recipe.ratings}</div>
                                <div className="h-10">
                                <button className='bg-red-400 px-5 py-2 font-bold text-black rounded-lg hover:bg-red-600 ease-in-out duration-300' >
										Add to Favourites{" "}
									</button>
                                </div>
							</div>
						</div> */}
					</Recipe>
				))}
			</div>
		</div>
	);
};

export default ChefDetails;
