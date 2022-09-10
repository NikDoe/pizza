import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	inputSearchValue: '',
	inputValue: '',
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchQuery: (state, action) => {
			state.inputSearchValue = action.payload;
		},
		setValue: (state, action) => {
			state.inputValue = action.payload;
		},
	},
});

export const { setSearchQuery, setValue } = searchSlice.actions;
export default searchSlice.reducer;
