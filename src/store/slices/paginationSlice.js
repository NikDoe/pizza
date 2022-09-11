import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activePage: 0,
	pagesCount: 0,
	limit: 4,
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setActivePage: (state, action) => {
			state.activePage = action.payload;
		},
		setPagesCount: (state, action) => {
			state.pagesCount = Math.ceil(action.payload / state.limit);
		},
	},
});

export const { setActivePage, setPagesCount } = paginationSlice.actions;
export default paginationSlice.reducer;
