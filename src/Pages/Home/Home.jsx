import React from "react";
import "./Home.css";

import Chefs from "../../Single/Chefs/Chefs";
import HomeRecipes from "./HomeRecipes";
import Review from "./Review";
import Banner from "./Banner";
import Discount from "./Discount";
import Question from "./Question";

const Home = () => {
	return (
		<div>
			<Banner />
			<HomeRecipes />
			<Chefs />
			<Discount />
			<Review />
			<Question />
		</div>
	);
};

export default Home;
