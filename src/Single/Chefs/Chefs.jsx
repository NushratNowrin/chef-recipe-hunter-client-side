import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { AiFillLike } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";
import { Link, useNavigation } from "react-router-dom";
import Spinner from "../../Pages/Shared/Spinner/Spinner";
import { styles } from "../../Style/style";

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
		<div className='text-center bg-neutral-100 py-20'>
			<p className={`${styles.secondaryHeader}`}>---Search for your favoure chef?---</p>
            <h2 className={`${styles.primaryHeader}`}>All chefs are here</h2>
			<div className='rounded-b-lg grid items-center justify-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-16 gap-5 lg:px-32 md:px-20 px-2'>
				{chefs.map((chef) => (
					<div
						key={chef.id}
						className='w-full border-solid border-2 border-neutral-950 rounded-3xl overflow-hidden shadow-lg shadow-neutral-950/50'>
						<div className='flex justify-center w-full'>
							<LazyLoad className='h-60' offset={300} threshold={0.95}>
							<img className='h-60 ' src={chef.image} alt='' />
							</LazyLoad>
						</div>
						<div className='bg-neutral-950 text-white sm:p-10 p-3 w-full text-center'>
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
