import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../../SharedItems/ActiveLink/ActiveLink";
import Login from "../../Login/Login"
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  
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
		<div className='flex bg-red-700 items-center px-20 p-5 text-white justify-between'>
			<h3 className='font-bold text-xl tracking-wide'>
				<Link to='/'>Deshi Delights</Link>
			</h3>
			<div>
				<ul className="flex">
					<li className='mx-10 font-semibold'>
						<ActiveLink to='/'>
							Home
						</ActiveLink>
					</li>
					<li className='mx-10 font-semibold'>
						<ActiveLink to='/blogs'>
							Blogs
						</ActiveLink>
					</li>
				</ul>
			</div>
      {
      
        }
      {/* {loginUser ? (
				<button onClick={signout}>Sign Out</button>
			) : ( */}
			<button className='px-4 py-2 rounded font-bold text-white bg-black bg-opacity-90 hover:bg-opacity-100'>
        {/* {loginUser ?(
      <ActiveLink to='/logout'>Logout</ActiveLink>): */}
      
      <ActiveLink to='/login'>
        Login
						</ActiveLink>
            {/* )} */}
            </button>

		</div>
	);
};

export default Header;
