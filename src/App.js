import './scss/app.scss';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import { useState } from 'react';

function App() {
	const [searchQuery, setSearchQuery] = useState('');

	console.log(searchQuery);

	return (
		<div className="wrapper">
			<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<div className="content">
				<div className="container">
					<Routes>
						<Route path="/" element={<Home searchQuery={searchQuery} />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
