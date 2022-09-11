import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import sort from './slices/sortSlice';
import search from './slices/searchSlice';
import pagination from './slices/paginationSlice';
import pizzas from './slices/pizzasSlice';

export const store = configureStore({
	reducer: {
		filter,
		sort,
		search,
		pagination,
		pizzas,
	},
});
