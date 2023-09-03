import React from "react";
import ErrorImg from "../../assets/error.png";
import ErrorImg2 from "../../assets/404.png";

const Error = () => {
	return (
		<div className='py-20 pt-40 bg-red-200 p-10 rounded-xl h-screen flex flex-col justify-center items-center'>
			<div className='flex justify-center h-1/2 w-1/2'>
				<img src={ErrorImg2} alt='' className="border-2 shadow-lg border-red-400 rounded-full"/>
			</div>
			<h2 className='text-3xl font-semibold p-2'>Ooppss!!!</h2>
			<p className='text-xl font-semibold p-2'>Page not found.</p>
			<div className='mt-5'>
				<a href="/" className='banner-button px-5 py-3 rounded-md text-white font-semibold bg-red-400 '>
					Back to home
				</a>
			</div>
		</div>
	);
};

export default Error;
