import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../../SharedItems/ActiveLink/ActiveLink";
import Login from "../../Login/Login";
import { getAuth, signOut } from "firebase/auth";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
	const [open, setOpen] = useState(false);
	// const signout = () => {
	// 	const auth = getAuth();
	// 	signOut(auth)
	// 		.then((result) => {
	// 			// Sign-out successful.
	// 			console.log(result);
	// 			setLoginUser(null);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	return (
		<div className='flex bg-black items-center md:px-20 p-5 text-white justify-between'>
			<h3 className='font-bold text-xl tracking-wide text-red-300'>
				<Link to='/'>Deshi Delights</Link>
			</h3>
			{/* hambarger */}
			<div onClick={() => setOpen(!open)} className='md:hidden'>
							<span>
								{open === true ? (
									<XMarkIcon className='text-right absolute right-3 top-6 h-6 w-6 text-blue-500' />
								) : (
									<Bars3Icon className='h-6 w-6 text-blue-500' />
								)}
							</span>
						</div>

						{/* desktop icon */}
			<div className={`md:flex justify-between items-center ${
									open ? "" : "hidden"
								}`}>
				<ul className='md:flex'>
					<li className='mx-10 font-semibold'>
						<ActiveLink to='/'>Home</ActiveLink>
					</li>
					<li className='mx-10 font-semibold'>
						<ActiveLink to='/blogs'>Blogs</ActiveLink>
					</li>
				</ul>
				<div className='h-10 w-20'>
				<button className=' bg-red-300 px-5 py-2 font-bold text-black rounded-lg hover:bg-red-600 hover:text-lg ease-in-out duration-300 ml-10'>
					{/* {loginUser ?(
      <ActiveLink to='/logout'>Logout</ActiveLink>): */}

					<ActiveLink to='/login'>Login</ActiveLink>
					{/* )} */}
				</button>
			</div>
			</div>
			
		</div>
	);
};

export default Header;
