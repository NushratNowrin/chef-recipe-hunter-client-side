import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const Register = () => {
	const [showError, setShowError] = useState("");
	const [success, setSuccess] = useState("");
	const [passwordType, setPasswordType] = useState("password");
	const [passwordInput, setPasswordInput] = useState("");

	const { createUser } = useContext(AuthContext);

	const togglePassword = () => {
		if (passwordType === "password") {
			setPasswordType("text");
			return;
		}
		setPasswordType("password");
	};
	const handlePasswordChange = (evnt) => {
		setPasswordInput(evnt.target.value);
	};
	const getFormData = (event) => {
		setSuccess("");
		setShowError("");
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const photoURL = event.target.photo.value;

		console.log(
			`email: ${email}
			password: ${password}`
		)

		//create fireBase Auth
		createUser(email, password)
		.then(result => {
			// Signed in 
			const loggeduser = result.user;
				console.log(loggeduser)
				setShowError("");
				setSuccess("User Has been created successfully");
				event.target.reset();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				setShowError(errorMessage);
			});

		// Password validation

		if (!/.{6}/.test(password)) {
			setShowError("Password need at least 6 character");
			return;
		}
	};

	return (
		<div className='w-50 p-10 bg-slate-300 text-center'>
			<div className='bg-black md:w-8/12 m-auto py-16 md:px-20 rounded mb-10'>
				<h4 className='text-2xl font-bold mb-6 text-red-300'>Please Register</h4>
				<form onSubmit={getFormData}>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Enter Name'
						required
						className='py-1 px-3 rounded my-2'
					/>
					<br />
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter Email Address'
						required
						className='py-1 px-3 rounded my-2'
					/>
					<br />
					<div className='flex items-center justify-center'>
						<input
							type={passwordType}
							onChange={handlePasswordChange}
							value={passwordInput}
							name='password'
							id='password'
							placeholder='Enter Password'
							required
							className='py-1 w-3/5 md:w-2/5 px-3 rounded-l my-2'
						/>
						<span onClick={togglePassword}>
							{passwordType === "password" ? (
								<EyeIcon className='eyeIcon bg-white' />
							) : (
								<EyeSlashIcon className='eyeIcon bg-white' />
							)}
						</span>
					</div>

					<input
						type='text'
						name='photoURL'
						id='photoURL'
						placeholder='Insert your Photo URL'
						className='py-1 px-3 rounded my-2'
					/>
					<div className='text-yellow-300 font-bold'>{showError}</div>
					<div className='text-green-400 font-semibold'>{success}</div><br></br>
					<div className=' h-10 mx-auto'>
						<input
							type='submit'
							value='Register'
							className=' bg-red-300 px-5 py-2 font-bold text-black rounded-lg hover:bg-red-600 hover:text-lg ease-in-out duration-300'
						/>
					</div>
				</form><br></br>

				<div className='text-white'>
					Already have an account? Please{" "}
					<Link to='../login' className='font-semibold text-yellow-300'>
						Login
					</Link>{" "}
				</div>
			</div>
		</div>
	);
};

export default Register;
