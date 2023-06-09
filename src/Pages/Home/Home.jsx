import React from "react";
import "./Home.css";
import customer1 from "../../assets/customer-1.jpg";
import customer2 from "../../assets/customer-2.jpg";
import customer3 from "../../assets/customer-3.jpg";
import customer4 from "../../assets/customer-4.jpg";
import "./Home.css";
import Chefs from "../../Single/Chefs/Chefs";

const Home = () => {
	return (
		<div>
			{/* Banner */}
			<div className='banner my-10 flex justify-center items-center md:px-48'>
				<div></div>
				<div className='text-white text-center py-12 md:px-20 px-10 bg-zinc-500 bg-opacity-50 rounded-3xl'>
					<h2 className='text-3xl font-bold tracking-wide '>Welcome...</h2>
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

			{/* Chef */}
			<Chefs></Chefs>

			{/* Discount */}
			<div className='discount flex justify-center items-center my-10 md:px-48'>
				<div className=' text-center py-12 md:px-20 md:w-11/12 w-80 bg-zinc-800 bg-opacity-100 rounded-full outline-dotted outline-4 outline-offset-8'>
					<h2 className='text-amber-500 text-xl font-semibold tracking-wide'>
						Get 25% Discount
					</h2>
					<p className='font-semibold tracking-wide text-3xl text-red-400 my-5'>
						Explore Special Taste & The Best Quality
					</p>
					<div className='h-16 flex items-center justify-center'>
						<button className='bg-amber-600 text-white px-5 py-3 font-bold rounded-2xl tracking-wide hover:bg-amber-700 hover:text-lg ease-in-out duration-300'>
							Show All Items
						</button>
					</div>
				</div>
			</div>

			{/* Clients review */}
			<div className='my-10'>
				<h2 className='bg-black text-yellow-400 py-5 font-semibold text-2xl text-center tracking-wide rounded-t-lg'>
					Customer&lsquo;s Review
				</h2>
				<div className='bg-neutral-100 rounded-b-lg grid md:grid-cols-4 gap-8 p-8 pb-16 items-center justify-center'>
					<div className='bg-stone-300 text-center p-5 md:m-0 mx-12 my-6 rounded-lg'>
						<div className='h-40 overflow-hidden flex items-center  rounded-full '>
							<img src={customer1} alt='' />
						</div>
						<h3 className='py-2 font-semibold'>Robin</h3>
						<p className='text-stone-600 text-xs font-medium'>
							Their behavior and delivery is soo good
						</p>
					</div>
					<div className='bg-stone-300 text-center p-5 md:m-0 mx-12 my-6 rounded-lg'>
						<div className='h-40 overflow-hidden flex items-center rounded-full'>
							<img src={customer2} alt='' />
						</div>
						<h3 className='py-2 font-semibold'>Bobin</h3>
						<p className='text-stone-600 text-xs font-medium'>
							The taste and quality was speechless.
						</p>
					</div>
					<div className='bg-stone-300 text-center p-5 md:m-0 mx-12 my-6 rounded-lg'>
					<div className='h-40 overflow-hidden flex items-center rounded-full'>
							<img
								src={customer3}
								alt=''
							/>
						</div>
						<h3 className='py-2 font-semibold'>Ritu</h3>
						<p className='text-stone-600 text-xs font-medium'>
							The best restaurant I have ever seen.
						</p>
					</div>
					<div className='bg-stone-300 text-center p-5 md:m-0 mx-12 my-6 rounded-lg'>
					<div className='h-40 overflow-hidden flex items-center rounded-full'>
							<img src={customer4} alt='' />
						</div>
						<h3 className='py-2 font-semibold'>Mitu</h3>
						<p className='text-stone-600 text-xs font-medium'>
							Always trusted and qualityfull service.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
