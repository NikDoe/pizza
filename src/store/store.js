import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import sort from './slices/sortSlice';
import search from './slices/SearchSlice';

export const store = configureStore({
	reducer: {
		filter,
		sort,
		search,
	},
});
