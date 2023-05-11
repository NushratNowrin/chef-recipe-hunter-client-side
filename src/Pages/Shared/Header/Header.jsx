import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../../SharedItems/ActiveLink/ActiveLink";
import Login from "../../Login/Login";
import { getAuth, signOut } from "firebase/auth";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../Provider/AuthProviders";

const Header = () => {
	const [open, setOpen] = useState(false);
	const { user, logout } = useContext(AuthContext);

	const handleLogOut = () =>{
		logout()
		.then((result) => {
						// Sign-out successful.
						console.log(result);
					})
					.catch((error) => {
						console.log(error);
					});
	}
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
			<div
				className={`md:flex justify-between items-center ${
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
				<div className='h-10 w-28'>			
					{user ? (
						<div className="flex justify-between items-center">
							<img className="h-10 w-10 rounded-full" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt="" />
							<div className="w-16 h-10">
							<button onClick={handleLogOut} className=' bg-red-300 px-5 py-2 font-bold text-black rounded-lg hover:bg-red-600 hover:text-lg ease-in-out duration-300'>
							Logout
							</button>
							</div>
						</div>
					) : (
						<button className=' bg-red-300 px-5 py-2 font-bold text-black rounded-lg divhover:bg-red-600 hover:text-lg ease-in-out duration-300'>
							<ActiveLink to='/login'>Login</ActiveLink>
						</button>
						
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
