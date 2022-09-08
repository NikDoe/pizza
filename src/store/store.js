import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import sort from './slices/sortSlice';

export const store = configureStore({
	reducer: {
		filter,
		sort,
	},
});
