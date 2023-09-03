import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import { styles } from "../../Style/style";

const FAQ = () => {
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	const toggleAccordion1 = () => {
		setIsOpen1(!isOpen1);
	};
	const toggleAccordion2 = () => {
		setIsOpen2(!isOpen2);
	};
	const toggleAccordion3 = () => {
		setIsOpen3(!isOpen3);
	};
	const toggleAccordion4 = () => {
		setIsOpen4(!isOpen4);
	};
	return (
		<div className='py-20 md:px-40 sm:px-20 px-10 bg-neutral-200'>
			<div>
				<p className={`${styles.secondaryHeader}`}>---Any Question---</p>
				<h2 className={`${styles.primaryHeader}`}>Frequently Asked Question</h2>
			</div>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-red-400 text-black py-3 px-8'
					onClick={toggleAccordion1}>
					<h3>How do I Claim a Free Coupon?</h3>
					<span className='mr-3'>{isOpen1 ? "-" : "+"}</span>
				</div>
				{isOpen1 && (
					<div className='text-base accordion-content bg-red-200 py-8 px-8'>
						<p>
							Coupons are free to claim, use the search or find somewhere close by using the Google Map View.
							<br />
							Once you&apos;ve found a great coupon offer, click the day you wish to use it, fill out your details to complete. 
                            <br />
                            You&apos;ll instantly receive your free coupon to your email inbox. 
                            <br />
                            To redeem - simply present coupon to staff when paying.
						</p>
					</div>
				)}
			</div>

			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-red-400 text-black py-3 px-8'
					onClick={toggleAccordion2}>
					<h3>How do I Make a regular Table Booking?</h3>
					<span>{isOpen2 ? "-" : "+"}</span>
				</div>
				{isOpen2 && (
					<div className='text-base accordion-content bg-red-200 py-8 px-8'>
						<p>
                        It&apos;s a piece of cake - once you&apos;ve found your preferred restaurant simply select your Date and Time required, and then so long as we have an email address and phone number your booking is instantly confirmed the minute you hit &quot;Book&quot;.
                        </p>
					</div>
				)}
			</div>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-red-400 text-black py-3 px-8'
					onClick={toggleAccordion3}>
					<h3>I&apos;m sure I&apos;ve booked, but I havent had confirmation - what now?</h3>
					<span>{isOpen3 ? "-" : "+"}</span>
				</div>
				{isOpen3 && (
					<div className='text-base accordion-content bg-red-200 py-8 px-8'>
						<p>
                        We will always send you an automated confirmation when your booking is confirmed at the restaurant. If you haven&apos;t received a confirmation, please start the process again. If you continue to have an issue please give us a call on 09 928 6079 during business hours or drop us a line at deshidelight@gmail.com and we&apos;ll be in touch to resolve the issue.
						</p>
					</div>
				)}
			</div>
			<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
				<div
					className='accordion-header flex justify-between items-center text-lg bg-red-400 text-black py-3 px-8'
					onClick={toggleAccordion4}>
					<h3>How do I cancel a booking?</h3>
					<span>{isOpen4 ? "-" : "+"}</span>
				</div>
				{isOpen4 && (
					<div className='text-base accordion-content bg-red-200 py-8 px-8'>
						<p>
                        To help our restaurants manage their sittings we ask our diners to give at least 24 hours&apos; notice of any cancellations. You can do this by calling your restaurant direct.
                        <br />
                        If you need to cancel less than 24 hours before your dinner date you can use the cancellation link within your reminder email (sent 24 hours before your reservation time). We also encourage our diners to follow this up with a call direct to the restaurant.
                        <br />
                        To amend a booking please call the restaurant direct, again endeavouring to give at least 24 hours&apos; notice.
                        </p>
					</div>
				)}
			</div>
		</div>
	);
};

export default FAQ;
