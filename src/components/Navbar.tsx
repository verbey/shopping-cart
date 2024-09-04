import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<h1>404 Store</h1>
			<div className='navbarMenu'>
				<Link to='/'>Home</Link>
				<Link to='/store'>Store</Link>
				<Link to='/cart'>Cart</Link>
				<Link to='/about'>About</Link>
			</div>
		</nav>
	);
}

export default Navbar;
