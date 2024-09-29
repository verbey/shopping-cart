import { Link } from 'react-router-dom';

import styles from '../styles/navbar.module.css';

function Navbar({
	shoppingCartItems,
}: {
	shoppingCartItems: number | undefined;
}) {
	return (
		<nav>
			<h1>404 Store</h1>
			<div className={styles.navbarMenu}>
				<Link to='/' className={styles.link}>
					Home
				</Link>
				<Link to='/store' className={styles.link}>
					Store
				</Link>
				<Link to='/cart' className={styles.link}>
					Cart
				</Link>
				<div className={styles.shoppingCartItems}>
					{shoppingCartItems === undefined ? '0' : shoppingCartItems}
				</div>
				<Link to='/about' className={styles.link}>
					About
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
