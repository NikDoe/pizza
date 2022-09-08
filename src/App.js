import './scss/app.scss';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import { createContext, useState } from 'react';

export const SearchContext = createContext({});

function App() {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
