import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { useEffect } from "react";
import HomeRecipe from "./HomeRecipe";
import { styles } from "../../Style/style";

const HomeRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		fetch(
			"https://chef-recipe-hunter-server-side-nowrin2023-gmailcom.vercel.app/recipes"
		)
			.then((res) => res.json())
			.then((data) => setRecipes(data));
	}, []);

  const pagination = {
    clickable: true,
  }
	// console.log(recipes);
	return (
		<div className="sm:mx-20 my-20 text-center ">
            <p className={`${styles.secondaryHeader}`}>---From 10:00am to 8:00pm---</p>
            <h2 className={`${styles.primaryHeader} font-serif`}>ORDER ONLINE</h2>
			<Swiper
				cssMode={true}
				autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
				keyboard={true}
				slidesPerView={5}
				spaceBetween={10}
                breakpoints={{
                    1040: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    840: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                    440: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                    240: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    }
                  }}
                  modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
				className='mySwiper'>
				
                {recipes.map((recipe) => (
					<SwiperSlide key={recipe.id}>
                    <img className="h-60 w-full flex items-center justify-center" src={recipe.image} alt={recipe.name} />
                    <p className='h-10 flex items-center justify-center category-text text-center  uppercase bg-black bg-opacity-60 text-white -translate-y-20'>
                        {recipe.name}
                    </p>
                </SwiperSlide>
				))}
                

				{/*  */}
			</Swiper>
		</div>
	);
};

export default HomeRecipes;
