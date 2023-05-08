import React from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";

const Blogs = () => {

	// spinner
	const navigation = useNavigation();
	if(navigation.state === 'loading'){
		return <Spinner></Spinner>
	}
	
	return (
		<div className='bg-black p-10 my-10'>
			<h2 className='text-3xl font-semibold text-white text-center'>
				Some Important Questions
			</h2>
			<div className='bg-red-200 md:mx-36 mx-4 my-8 rounded-lg'>
				<h3 className='text-xl font-semibold border-b-8 border-black p-10'>
					1. What are the differences between uncontrolled and controlled
					components?
				</h3>
				<p className='text-base font-medium p-10'>
					In React, controlled components refer to components that have their
					state and behavior controlled by the parent component. These
					components rely on props passed down from the parent component to
					update their state and behavior. <br />
					<br />
					Uncontrolled components refer to components that manage their own
					state internally. They use a ref to access the DOM element&apos;s
					current value and update the state accordingly.
				</p>
			</div>
			<div className='bg-red-200 md:mx-36 mx-4 my-8 rounded-lg'>
				<h3 className='text-xl font-semibold border-b-8 border-black p-10'>
					2. How to validate React props using PropTypes?
				</h3>
				<p className='text-base font-medium p-10'>
					Props and PropTypes are important mechanisms for passing read-only
					attributes between React components. We can use React props, short for
					properties, to send data from one component to another. If a component
					receives the wrong type of props, it can cause bugs and unexpected
					errors in your app. <br /> <br />
                     Below are the validators for the basic data types:
					<ul className="list-disc list-inside">
						<li>
							<b>PropTypes.any:</b> The prop can be of any data type
						</li>
						<li>
							<b>PropTypes.bool:</b> The prop should be a Boolean
						</li>
						<li>
							<b>PropTypes.number:</b> The prop should be a number
						</li>
						<li>
							<b>PropTypes.string:</b> The prop should be a string
						</li>
						<li>
							<b>PropTypes.func:</b> The prop should be a function
						</li>
						<li>
							<b>PropTypes.array:</b> The prop should be an array
						</li>
						<li>
							<b>PropTypes.object:</b> The prop should be an object
						</li>
						<li>
							<b>PropTypes.symbol:</b> The prop should be a symbol
						</li>
					</ul>
				</p>
			</div>
			<div className='bg-red-200 md:mx-36 mx-4 my-8 rounded-lg'>
				<h3 className='text-xl font-semibold border-b-8 border-black p-10'>
					3. What are the differences between nodejs and expressjs?
				</h3>
				<p className='text-base font-medium p-10'>
                    <ul className="list-disc list-inside">
                        <li>Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.</li>
                        <li>Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</li>
                    </ul>
				</p>
			</div>
			<div className='bg-red-200 md:mx-36 mx-4 my-8 rounded-lg'>
				<h3 className='text-xl font-semibold border-b-8 border-black p-10'>
					4. What is a custom hook, and why will you create a custom hook?
				</h3>
				<p className='text-base font-medium p-10'>
                Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
				</p>
			</div>
		</div>
	);
};

export default Blogs;
