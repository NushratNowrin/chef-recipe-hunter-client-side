import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";
import { Link } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";

const ChefDetails = () => {
	const { image, name, experience, description, recipe, likes } =
		useLoaderData();

	// spinner
	const navigation = useNavigation();
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}

	return (
		<div>
			{/* Banner */}
			<div className='grid grid-cols-5 justify-center items-center gap-2 my-10 bg-neutral-100 px-20'>
				<div className="col-span-2	">
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
		</div>
	);
};

export default ChefDetails;
