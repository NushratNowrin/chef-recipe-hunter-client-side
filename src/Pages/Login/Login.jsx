import React, { useRef, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import {
	Link,
	useLocation,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import "./Login.css";
import Spinner from "../Shared/Spinner/Spinner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const Login = () => {
	const [loginUser, setLoginUser] = useState(null);
	const [showError, setShowError] = useState("");
	const [success, setSuccess] = useState("");
	const emailRef = useRef();
	const [passwordType, setPasswordType] = useState("password");
	const [passwordInput, setPasswordInput] = useState("");
	const navigation = useNavigation();
	const navigate = useNavigate();
	const location = useLocation();
	const { login, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

	const from = location.state?.from?.pathname || "/";

	// Spinner
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}

	const auth = getAuth(app);

	const handlePasswordChange = (event) => {
		setPasswordInput(event.target.value);
	};
	const togglePassword = () => {
		if (passwordType === "password") {
			setPasswordType("text");
			return;
		}
		setPasswordType("password");
	};

	const getLoginData = (event) => {
		event.preventDefault();
		setSuccess("");
		setShowError("");
		const email = event.target.email.value;
		const password = event.target.password.value;

		login(email, password)
			.then((userCredential) => {
				// Signed in
				const loggeduser = userCredential.user;
				console.log(loggeduser);
				setShowError("");
				event.target.reset();
				// navigate
				navigate(from, { replace: true });
			})
			.catch((error) => {
				const errorMessage = error.message;
				setShowError(errorMessage);
			});
	};
	const forgetPassword = (event) => {
		const email = emailRef.current.value;
		if (!email) {
			alert("Please provide yout email");
			return;
		}
		sendPasswordResetEmail(auth, email)
			.then(() => {
				alert("Please Check your email");
			})
			.catch((error) => {
				console.log(error);
				setShowError(error);
			});
	};

	const loginWithGoogle = () => {
		signInWithGoogle()
			.then((result) => {
				const user = result.user;
				setLoginUser(user);
				// navigate
				navigate(from, { replace: true });
			})
			.catch((error) => {
				const errorMessage = error.message;
				setShowError(errorMessage);
			});
	};

	const loginWithGithub = () => {
		signInWithGithub()
			.then((result) => {
				const user = result.user;
				setLoginUser(user);
				// navigate
				navigate(from, { replace: true });
			})
			.catch((error) => {
				const errorMessage = error.message;
				setShowError(errorMessage);
			});
		console.log(loginUser);
	};

	return (
		<div className='w-50 xs:p-10 bg-slate-300 text-center pt-32 pb-10'>
			<div className='email-pass bg-black md:w-80 m-auto sm:p-16 px-8 py-16 rounded-md mb-10'>
				<h4 className='text-2xl font-bold mb-6 text-red-400'>Please Login</h4>
				<form onSubmit={getLoginData} className='login "text-white'>
					<input
						className='py-1 px-3 w-full rounded my-2'
						type='email'
						name='email'
						id='email'
						placeholder='Enter Email Address'
						ref={emailRef}
						required
					/>
					<br />
					<div className='flex items-center justify-center'>
						<input
							className='py-1 px-3 w-full rounded-l my-2'
							type={passwordType}
							onChange={handlePasswordChange}
							value={passwordInput}
							name='password'
							id='password'
							placeholder='Enter Password'
							required
						/>
						<span onClick={togglePassword}>
							{passwordType === "password" ? (
								<EyeIcon className='eyeIcon bg-white' />
							) : (
								<EyeSlashIcon className='eyeIcon bg-white' />
							)}
						</span>
					</div>

					<br />
					<div className='text-yellow-300 font-bold'>{showError}</div>
					<div className='text-green-500'>{success}</div>
					<div className='h-10 mx-auto'>
						<input
							type='submit'
							value='Login'
							className=' bg-red-400 px-5 py-2 font-bold text-black rounded-lg button-hover'
						/>
					</div>
				</form><br></br>

				<p>
					<small className='text-white font-semibold'>
						Forgot password? Please{" "}
						<button className='text-yellow-300' onClick={forgetPassword}>
							Reset Password
						</button>
					</small>
				</p>
			</div>
			<div className='text-xl font-bold '>Or</div>
			<div>
				<button
					className='px-12 py-4 bg-black rounded-md text-red-400 font-semibold  my-2 button-hover'
					onClick={loginWithGoogle}>
					Sign in with Google
				</button>
				<br></br>
				<button
					className='px-12 py-4 bg-black rounded-md text-red-400 font-semibold button-hover my-2'
					onClick={loginWithGithub}>
					Sign in with Github
				</button>
			</div>
			<div className='m-5'>
				New to this site? please{" "}
				<Link to='../register' className='font-semibold text-red-700'>
					Register
				</Link>{" "}
				First
			</div>
		</div>
	);
};

export default Login;
