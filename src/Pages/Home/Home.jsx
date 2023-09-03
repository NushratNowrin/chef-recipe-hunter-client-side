import React from "react";
import "./Home.css";

import Chefs from "../../Single/Chefs/Chefs";
import HomeRecipes from "./HomeRecipes";
import ActiveLink from "../../SharedItems/ActiveLink/ActiveLink";
import { styles } from "../../Style/style";
import Review from "./Review";

const Home = () => {
	return (
		<div>
			{/* Banner */}
			<div className='banner flex justify-center items-center md:py-32 md:px-48 xs:p-16 p-10 md:pt-40 pt-40'>
				
				<div className='text-white text-center md:p-20 p-10 bg-black bg-opacity-75 rounded-3xl'>
					<h2 className='text-3xl font-bold tracking-wide font-serif'>Welcome...</h2>
					<p className='tracking-wide text-md font-semibold my-5 '>
						From farm to table, we bring you the freshest ingredients. Our
						commitment to locally sourced produce and meats means you get the
						highest quality dishes.
					</p>
					<div className='h-10  w-60 m-auto'>
						<button className='bg-red-300 px-5 py-2 font-bold text-black rounded-lg tracking-wide hover:bg-red-500 hover:text-lg ease-in-out duration-300'>
							Learn More
						</button>
					</div>
				</div>
			</div>

			{/* Home recipe */}
			<HomeRecipes></HomeRecipes>

			{/* Chef */}
			<Chefs></Chefs>

			{/* Discount */}
			<div className='discount flex justify-center items-center md:px-48 md:py-32 py-20 px-2'>
				<div className=' text-center py-12 md:px-20 xs:px-10 px-5  w-11/12 bg-black bg-opacity-75 rounded-full outline-dotted outline-4 outline-offset-8'>
					<h2 className='text-amber-500 text-xl font-semibold tracking-wide'>
						Get 25% Discount
					</h2>
					<p className='font-semibold tracking-wide text-3xl text-red-400 my-5'>
						Explore Special Taste & The Best Quality
					</p>
					<div className='h-16 flex items-center justify-center'>
						<button className='bg-amber-600 text-white px-5 py-3 font-bold rounded-2xl tracking-wide hover:bg-amber-700 hover:text-lg ease-in-out duration-300'>
							<ActiveLink to='/recipes'>Show All Items</ActiveLink>
						</button>
					</div>
				</div>
			</div>

			{/* Clients review */}
			<Review></Review>
		</div>
	);
};

export default Home;
