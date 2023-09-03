import React from "react";
import "./Home.css";

import Chefs from "../../Single/Chefs/Chefs";
import HomeRecipes from "./HomeRecipes";
import ActiveLink from "../../SharedItems/ActiveLink/ActiveLink";
import { styles } from "../../Style/style";
import Review from "./Review";
import FAQ from "./FAQ";
import Banner from "./Banner";
import Discount from "./Discount";

const Home = () => {
	return (
		<div>
			<Banner />
			<HomeRecipes />
			<Chefs />
			<Discount />
			<Review />
			<FAQ></FAQ>
		</div>
	);
};

export default Home;
