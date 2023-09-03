import React from "react";
import { styles } from "../../Style/style";
import bgimg from "../../assets/Reviewbg.jpg";
import "./Home.css";
import { useState, useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Review = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("/review.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	// Swiper
	const progressCircle = useRef(null);
	const progressContent = useRef(null);

	return (
		<div className='my-20 '>
			<div className='mb-10'></div>
			<div className='grid sm:grid-cols-2 grid-cols-1 items-center justify-center gap-0 lg:mx-40'>
				{/* Slider Review */}
				<div className='review-1 h-[500px] flex justify-center items-center'>
					<Swiper
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						centeredSlides={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className='mySwiper'>
						{reviews.map((review) => (
							<SwiperSlide key={review.id}>
								<div className='flex flex-col justify-center items-center py-5 lg:mx-20 lg:ml-28 ml-5 my-10 bg-white rounded-2xl bg-opacity-50'>
									<div className='flex justify-center items-center  mb-5 rounded-full border-2 border-black overflow-hidden h-40 w-40 p-2 bg-white'>
										<img src={review.img} className=' ' alt='' />
									</div>
                                    <div className='flex flex-col justify-center items-center mx-10 text-center'>
                                        <h2 className="text-xl font-semibold">{review.name}</h2>
                                        <p>{review.review}</p>
                                    </div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className='review-2 h-[500px] flex justify-center items-center'>
					<div className='flex flex-col w-3/4 justify-center items-center bg-white bg-opacity-80 lg:p-20 p-5 rounded-3xl'>
						<p className={`${styles.secondaryHeader} font-medium`}>
							What&lsquo;s our customer say
						</p>
						<h2 className={`${styles.primaryHeader}`}>
							Customer&lsquo;s Review
						</h2>
					</div>
				</div>
			</div>
			{/* <div className='rounded-b-lg grid md:grid-cols-4 gap-8 p-8 pb-16 items-center justify-center'>
					<div className='bg-stone-300 text-center p-5 md:m-0 mx-12 my-6 rounded-lg'>
						<div className='h-40 overflow-hidden flex items-center  rounded-full '>
							<img src={customer1} alt='' />
						</div>
						<h3 className='py-2 font-semibold'>Robin</h3>
						<p className='text-stone-600 text-xs font-medium'>
							Their behavior and delivery is soo good
						</p>
					</div>
					
				</div> */}
		</div>
	);
};

export default Review;
