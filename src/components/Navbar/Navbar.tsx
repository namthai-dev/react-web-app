import './Navbar.css';
import Twitter from '../../assets/twitter.svg';
import Facebook from '../../assets/facebook.svg';

const Navbar = () => {
	return (
		<div className="navbar">
			<a
				className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
				href="#"
			>
				React
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
					-web-app
				</span>
			</a>

			<div className="navbar__social-media">
				<a href="https://twitter.com/intent/tweet?url=#">
					<img src={Twitter} alt="" className="h-6" />
				</a>
				<a href="https://www.facebook.com/sharer/sharer.php?u=#">
					<img src={Facebook} alt="" className="h-6" />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
