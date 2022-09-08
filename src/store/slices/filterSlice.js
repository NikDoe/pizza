import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryIndex: 0,
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setActiveCategory: (state, action) => {
			state.categoryIndex = action.payload;
		},
	},
});

export const { setActiveCategory } = filterSlice.actions;
export default filterSlice.reducer;
