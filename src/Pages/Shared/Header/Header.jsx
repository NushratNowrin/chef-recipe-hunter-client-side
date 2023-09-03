import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../../SharedItems/ActiveLink/ActiveLink";
import Login from "../../Login/Login";
import { getAuth, signOut } from "firebase/auth";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../Provider/AuthProviders";
import logo from "../../../assets/logo.png";

const Header = () => {
	const [open, setOpen] = useState(false);
	const { user, logout } = useContext(AuthContext);

	const handleLogOut = () => {
		logout()
			.then((result) => {
				// Sign-out successful.
			})
			.catch((error) => {});
	};
	return (
		<div className='w-full flex justify-between items-center fixed z-50 bg-black bg-opacity-75 md:px-20 p-5 text-white'>
			<h3>
				<Link to='/'>
					<img className='h-20' src={logo} alt='' />
				</Link>
			</h3>
			{/* hambarger */}
			<div onClick={() => setOpen(!open)} className='md:hidden'>
				<span>
					{open === true ? (
						<XMarkIcon className='text-right absolute right-5 top-12 h-6 w-6 text-white' />
					) : (
						<Bars3Icon className='h-6 w-6 text-white' />
					)}
				</span>
				<div
					className={`${
						!open ? "hidden" : "flex flex-col"
					} p-6 bg-black opacity-90 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
					<ul className='list-none flex flex-col justify-end items-start gap-4'>
						<li className='mx-10 font-semibold menu-item'>
							<ActiveLink to='/'>Home</ActiveLink>
						</li>
						<li className='mx-10 font-semibold menu-item'>
							<ActiveLink to='/blogs'>Blogs</ActiveLink>
						</li>
						<li className='mx-10 font-semibold menu-item'>
							<ActiveLink to='/recipes'>Recipes</ActiveLink>
						</li>
						
						{user ? (
							<div className='flex flex-col mx-10 gap-3'>
								{user.photoURL != null ? (
									<img
										className='h-10 w-10 rounded-full'
										src={user.photoURL}
										title={user.email}
										alt=''
									/>
								) : (
									<img
										className='h-10 w-10 rounded-full'
										src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
										title={user.email}
										alt=''
									/>
								)}

								<div className='w-16 h-10 '>
									<button
										onClick={handleLogOut}
										className=' bg-red-400 px-5 py-2 font-bold text-black rounded-lg button-hover'>
										Logout
									</button>
								</div>
							</div>
						) : (
							<button className='bg-red-400 px-5 py-2 font-bold text-black rounded-lg button-hover flex flex-col mx-10 gap-3'>
								<Link to='/login'>Login</Link>
							</button>
						)}
					
					</ul>
					
				</div>
			</div>

			{/* desktop icon */}
			<div
				className={`md:flex justify-between items-center ${
					open ? "" : "hidden"
				}`}>
				<ul className='md:flex hidden items-center'>
					<li className='mx-10 font-semibold menu-item'>
						<ActiveLink to='/'>Home</ActiveLink>
					</li>
					<li className='mx-10 font-semibold menu-item'>
						<ActiveLink to='/blogs'>Blogs</ActiveLink>
					</li>
					<li className='mx-10 font-semibold menu-item'>
						<ActiveLink to='/recipes'>Recipes</ActiveLink>
					</li>
					{user ? (
							<div className='flex mx-10 gap-5'>
								{user.photoURL != null ? (
									<img
										className='h-10 w-10 rounded-full'
										src={user.photoURL}
										title={user.email}
										alt=''
									/>
								) : (
									<img
										className='h-10 w-10 rounded-full'
										src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
										title={user.email}
										alt=''
									/>
								)}

								<div className='w-16 h-10 '>
									<button
										onClick={handleLogOut}
										className=' bg-red-400 px-5 py-2 font-bold text-black rounded-lg button-hover'>
										Logout
									</button>
								</div>
							</div>
						) : (
							<button className='bg-red-400 px-5 py-2 font-bold text-black rounded-lg button-hover flex mx-10'>
								<Link to='/login'>Login</Link>
							</button>
						)}
				</ul>
			</div>
		</div>
	);
};

export default Header;
