import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { AiFillLike } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";
import { Link, useNavigation } from "react-router-dom";
import Spinner from "../../Pages/Shared/Spinner/Spinner";

const Chefs = () => {
	const [chefs, setChefs] = useState([]);
	useEffect(() => {
		fetch(
			"https://chef-recipe-hunter-server-side-nowrin2023-gmailcom.vercel.app/chefs"
		)
			.then((res) => res.json())
			.then((data) => setChefs(data));
	}, []);
	// spinner
	const navigation = useNavigation();
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}

	return (
		<div className='my-10'>
			<h2 className='bg-black text-yellow-400 py-5 font-semibold text-2xl text-center tracking-wide rounded-t-lg'>
				All chefs are here
			</h2>
			<div className='bg-neutral-100 rounded-b-lg grid md:grid-cols-3 gap-8 p-8 pb-16 items-center justify-center'>
				{chefs.map((chef) => (
					<div
						key={chef.id}
						className='mx-auto border-solid border-2 border-neutral-950 rounded-3xl overflow-hidden shadow-lg  shadow-neutral-950/50'>
						<div className='flex justify-center'>
							<LazyLoad className='h-60' offset={300} threshold={0.95}>
							<img className='h-60' src={chef.image} alt='' />
							</LazyLoad>
						</div>
						<div className='bg-neutral-950 text-white p-10 w-72 text-center'>
							<p className='text-lg font-semibold tracking-wide mb-2 text-red-300'>
								{chef.name}
							</p>

							<div className='flex items-center justify-center gap-1 mb-2'>
								<GiCookingPot className='text-red-300 text-xl' />
								<p>{chef.experience} Years of experience</p>
							</div>

							<div className='flex items-center justify-center gap-1 mb-2'>
								<MdFastfood className='text-yellow-300' />
								<p>{chef.recipe} Recipes</p>
							</div>

							<div className='flex items-center justify-center gap-1 mb-2'>
								<AiFillLike className='text-blue-500' />
								<p>{chef.likes}</p>
							</div>
							<div className='h-10'>
								<Link to={`chef/${chef.id}`} className='btn'>
									<button className='bg-red-300 px-5 py-2 font-bold text-black rounded-lg tracking-wide hover:bg-red-500 hover:text-lg ease-in-out duration-300'>
										View Recipes{" "}
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Chefs;
