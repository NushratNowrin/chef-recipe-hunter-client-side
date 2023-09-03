import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import { styles } from "../../Style/style";

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [noOfRecipes, setNoOfRecipes] = useState(10);
	const slice = recipes.slice(0, noOfRecipes);

	const loadMore = () => {
		setNoOfRecipes(noOfRecipes + 5);
	};

	useEffect(() => {
		fetch(
			"https://chef-recipe-hunter-server-side-nowrin2023-gmailcom.vercel.app/recipes"
		)
			.then((res) => res.json())
			.then((data) => setRecipes(data));
	}, []);

	return (
		<div className='bg-neutral-100 rounded-b-lg gap-8 p-8 pb-16 items-center justify-center pt-32 min-h-40'>
			<div>
				<p className={`${styles.secondaryHeader}`}>
					---Our Trending Recipes---
				</p>
				<h2 className={`${styles.primaryHeader}`}>All Our Recipes</h2>
			</div>
			{slice.map((recipe) => (
				<Recipe key={recipe.id} {...recipe}></Recipe>
			))}

			<div className='m-10 text-center mx-auto'>
				<span>
					{recipes.length >= noOfRecipes ? (
						<button
							onClick={() => loadMore()}
							className='banner-button px-5 py-3 rounded-md text-white font-semibold bg-red-400 '>
							See More Recipes
						</button>
					) : (
						<div>No More Recipes</div>
					)}
				</span>
			</div>
		</div>
	);
};

export default Recipes;
