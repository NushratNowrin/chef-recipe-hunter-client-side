import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    

    useEffect(() => {
		fetch('https://chef-recipe-hunter-server-side-nowrin2023-gmailcom.vercel.app/recipes')
			.then((res) => res.json())
			.then((data) => setRecipes(data));
	}, []);

	return (
		<div className='bg-neutral-100 rounded-b-lg gap-8 p-8 pb-16 items-center justify-center pt-20'>
            {recipes.map((recipe) => (
					<Recipe key={recipe.id} {...recipe}></Recipe>
				))}
		</div>
	);
};

export default Recipes;
