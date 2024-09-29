import generalStyles from '../styles/infoComponent.module.css';
import aboutStyles from '../styles/about.module.css';

function About() {
	return (
		<main className={generalStyles.main}>
			<h2 className={generalStyles.title}>About</h2>
			<p>This is the About page</p>
			<p>
				A project to practice learned React concepts. Made as a part of{' '}
				<a
					href='https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart'
					className={aboutStyles.link}
				>
					the Odin Project course
				</a>
				. See{' '}
				<a
					href='https://codeberg.org/Verbiturum/shopping-card'
					className={aboutStyles.link}
				>
					the code and README.md{' '}
				</a>
				for more information.
			</p>
		</main>
	);
}

export default About;
