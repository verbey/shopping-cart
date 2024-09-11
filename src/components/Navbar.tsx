import { Link } from 'react-router-dom';

function Navbar({ shoppingCartItems }: { shoppingCartItems: number }) {
	return (
		<nav>
			<h1>404 Store</h1>
			<div className='navbarMenu'>
				<Link to='/'>Home</Link>
				<Link to='/store'>Store</Link>
				<Link to='/cart'>Cart</Link>
				<div className='shoppingCartItems'>{shoppingCartItems}</div>
				<Link to='/about'>About</Link>
			</div>
		</nav>
	);
}

export default Navbar;
