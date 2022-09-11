import { configureStore } from '@reduxjs/toolkit';
import pizzas from './slices/pizzasSlice';
import query from './slices/querySlice';

export const store = configureStore({
	reducer: {
		pizzas,
		query,
	},
});
