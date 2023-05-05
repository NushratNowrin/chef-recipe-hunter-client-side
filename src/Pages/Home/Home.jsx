import React from "react";
import "./Home.css";
import Spinner from "../Shared/Spinner/Spinner";
import Chefs from "../../Single/Chefs/Chefs";

const Home = () => {
	return (
		<div>
			{/* Banner */}
			<div className='banner my-10 flex justify-between items-center md:px-48'>
				<div></div>
				<div className='text-white text-center py-12 px-20 bg-zinc-500 bg-opacity-50 rounded-3xl'>
					<h2 className='text-3xl font-bold tracking-wide '>Welcome...</h2>
					{/* <h3 className='text-xl font-bold my-3'>To Our Food World</h3> */}
					<p className='tracking-wide text-md font-semibold my-5 '>
						From farm to table, we bring you the freshest ingredients. Our
						commitment to locally sourced produce and meats means you get the
						highest quality dishes.
					</p>
					<button className='px-4 py-2 rounded font-semibold bg-red-700 text-white hover:bg-red-900'>
						Learn More
					</button>
				</div>
			</div>

            {/* Chef */}
            <Chefs></Chefs>

			{/* Discount */}
			<div className='discount flex justify-center items-center my-10 md:px-48'>
				<div className=' text-center py-12 px-20 bg-zinc-800 bg-opacity-100 rounded-full outline-dotted outline-4 outline-offset-8'>
					<h2 className='text-amber-500 text-xl font-semibold tracking-wide'>
						Get 25% Discount
					</h2>
					<p className='font-semibold tracking-wide text-3xl text-red-400 my-5'>
						Explore Special Taste & The Best Quality
					</p>
                    <div className="h-16 flex items-center justify-center">
                    <button className="bg-amber-600 text-white px-5 py-3 font-bold rounded-2xl tracking-wide hover:bg-amber-700 hover:text-lg ease-in-out duration-300">Show All Items</button>
                    </div>
				</div>
			</div>

		</div>
	);
};

export default Home;
