import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	inputValue: '',
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchQuery: (state, action) => {
			state.inputValue = action.payload;
		},
	},
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
