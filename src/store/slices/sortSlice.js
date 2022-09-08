import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeSort: { name: 'популярности (0-10)', sortBy: 'rating' },
};

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setActiveSort: (state, action) => {
			state.activeSort = action.payload;
		},
	},
});

export const { setActiveSort } = sortSlice.actions;
export default sortSlice.reducer;
