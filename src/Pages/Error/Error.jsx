import React from "react";
import ErrorImg from "../../assets/error.png";
import ErrorImg2 from "../../assets/404.png";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className=' bg-red-200 h-screen flex flex-col justify-center items-center'>
			<div className='flex justify-center'>
				<img src={ErrorImg2} alt='' className="border-2 shadow-lg border-red-400 rounded-full"/>
			</div>
			<h2 className='text-3xl font-semibold p-2'>Ooppss!!!</h2>
			<p className='text-xl font-semibold p-2'>Page not found.</p>
			<div className='mt-5'>
				<Link to="/" className='banner-button px-5 py-3 rounded-md text-white font-semibold bg-red-400 '>
					Back to home
				</Link>
			</div>
		</div>
	);
};

export default Error;
