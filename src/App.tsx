import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
// import { useState } from 'react';

function App() {
	return (
		<>
			<Navbar shoppingCartItems={0} />
			<Outlet />
		</>
	);
}

export default App;
