import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Store from './components/Store.tsx';
import Cart from './components/Cart.tsx';
import Checkout from './components/Checkout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/reset.css';
import './styles/style.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/about', element: <About /> },
			{ path: '/store', element: <Store /> },
			{ path: '/cart', element: <Cart /> },
			{ path: '/cart/checkout', element: <Checkout /> },
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
