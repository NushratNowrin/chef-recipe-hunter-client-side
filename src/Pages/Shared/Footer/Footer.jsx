import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<footer className='text-white'>
			<div className='md:grid grid-cols-2 text-neutral-content'>
				<div className='bg-slate-800 p-16 text-center md:pl-40'>
					<h2 className='font-medium text-lg mb-5'>CONTACT US</h2>
					<div className="text-sm ">
						<p className='mb-2'>123 ABS Street, Uni 21, Bangladesh</p>
						<p className='mb-2'>+88 123456789</p>
						<p className='mb-2'>Mon - Fri: 08:00 - 22:00</p>
						<p className='mb-2'>Sat - Sun: 10:00 - 23:00</p>
					</div>
				</div>
				<div className='bg-slate-900 p-16 text-center md:pr-40'>
					<h2 className='font-medium text-lg mb-5'>Follow US</h2>
                    <p className="text-sm ">Join us on social media</p>
					<div className='flex justify-center items-center gap-5 mt-5'>
                    
                        <Link to="/"><FaFacebookF /></Link>
                        <Link to="/"><FaInstagram /></Link>
                        <Link to="/"><FaTwitter /></Link>
					</div>
				</div>
			</div>
			<div className='footer p-4 bg-black text-white text-center'>
				<div>
					<p>Copyright © 2023 - CulinaryCloud. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
