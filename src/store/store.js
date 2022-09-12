import { configureStore } from '@reduxjs/toolkit';
import pizzas from './slices/pizzasSlice';
import query from './slices/querySlice';
import cart from './slices/cartSlice';

export const store = configureStore({
	reducer: {
		pizzas,
		query,
		cart,
	},
});
