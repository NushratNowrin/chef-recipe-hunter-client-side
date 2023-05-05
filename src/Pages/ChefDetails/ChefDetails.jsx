import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";
import Spinner from "../Shared/Spinner/Spinner";

const ChefDetails = () => {
	const [recipes, setRecipes] = useState([])
    const [fold, setFold] = useState(true)

	const { id, image, name, experience, description, recipe, likes } =
		useLoaderData();

	useEffect(() => {
		fetch(`http://localhost:5000/recipes/${id}`)
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
			<div className='grid grid-cols-5 justify-center items-center gap-2 my-10 bg-neutral-100 px-20'>
				<div className='col-span-2	'>
					<img className='h-96' src={image} alt='' />
				</div>
				<div className='col-span-3 bg-neutral-950 rounded-r-3xl p-10 text-white text-left '>
					<p className='text-md font-semibold tracking-wide mb-4 text-red-300'>
						{name}
					</p>
					<div className='text-sm text-white mb-4'>{description}</div>

					<div className='flex'>
						<div className='flex items-center gap-1 mb-2'>
							<GiCookingPot className='text-red-300 text-xl' />
							<p>{experience} Years of experience</p>
						</div>
						<div className='flex items-center gap-1 mb-1 ml-5'>
							<MdFastfood className='text-yellow-300' />
							<p>{recipe} Recipes</p>
						</div>

						<div className='flex items-center gap-1 mb-1 ml-5'>
							<AiFillLike className='text-blue-500' />
							<p>{likes}</p>
						</div>
					</div>
				</div>
			</div>

			{/* Recipe */}
			<div className='bg-neutral-100 rounded-b-lg grid grid-cols-3 gap-8 p-8 pb-16 items-center justify-center'>
				{recipes.map((recipe) => (
					<div key={recipe.id}>
						<div className='mx-auto border-solid border-2 border-neutral-950 rounded-3xl overflow-hidden shadow-lg  shadow-neutral-950/50'>
							<div className='flex justify-center'>
								<img className='h-60' src={recipe.image} alt='' />
							</div>
							<div className='bg-neutral-950 text-white p-10 w-72 text-center'>
								<p className='text-lg font-semibold tracking-wide mb-2 text-red-300'>
									{recipe.name}
								</p>
                                <div>
                                   Ingredients : {recipe.ingredients[0]}, {recipe.ingredients[1]}, {recipe.ingredients[2]}, {recipe.ingredients[3]}, {recipe.ingredients[4]}
                                </div>
                                <div>
                                    {recipe.cooking_method}
                                </div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ChefDetails;
