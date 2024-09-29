import styles from '../styles/infoComponent.module.css';

function Home() {
	return (
		<main className={styles.main}>
			<h2 className={styles.title}>Home</h2>
			<p>This is the Home page</p>
			<p>
				You can shop for more items if you go to the Store page. You can
				view items in the cart on the Cart page. You can read more about
				the project on the About page
			</p>
		</main>
	);
}

export default Home;
