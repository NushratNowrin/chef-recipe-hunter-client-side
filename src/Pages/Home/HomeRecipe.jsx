import React from 'react';
import { SwiperSlide } from "swiper/react";

const HomeRecipe = (recipe) => {
    const {image, name} = recipe;
    return (
        <SwiperSlide >
						<img className="h-60" src={recipe.image} alt={recipe.name} />
						<p className='h-20 category-text -mt-10 text-center font-light uppercase '>
							{recipe.name}
						</p>
					</SwiperSlide>
    );
};

export default HomeRecipe;