import React from 'react';

const Banner = () => {
    return (
        <div className='banner flex justify-center items-center md:py-32  md:px-48 sm:p-16 px-2 py-8 md:pt-40 pt-40'>
				
				<div className='text-white text-center md:p-20 px-2 py-8 bg-black bg-opacity-75 rounded-3xl'>
					<h2 className='text-3xl font-bold tracking-wide font-serif'>Welcome...</h2>
					<p className='tracking-wide text-md font-semibold my-5 '>
						From farm to table, we bring you the freshest ingredients. Our
						commitment to locally sourced produce and meats means you get the
						highest quality dishes.
					</p>
					<div className='h-10  w-60 m-auto'>
						<button className='bg-red-400 px-5 py-2 font-bold text-black rounded-lg tracking-wide button-hover'>
							Learn More
						</button>
					</div>
				</div>
			</div>
    );
};

export default Banner;