import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryIndex: 0,
	activeSort: { name: 'популярности (0-10)', sortBy: 'rating' },
	inputSearchValue: '',
	inputValue: '',
	activePage: 0,
	pagesCount: 0,
	limit: 4,
};

export const querySlice = createSlice({
	name: 'query',
	initialState,
	reducers: {
		setActiveCategory: (state, action) => {
			state.categoryIndex = action.payload;
		},
		setActiveSort: (state, action) => {
			state.activeSort = action.payload;
		},
		setSearchQuery: (state, action) => {
			state.inputSearchValue = action.payload;
		},
		setValue: (state, action) => {
			state.inputValue = action.payload;
		},
		setActivePage: (state, action) => {
			state.activePage = action.payload;
		},
		setPagesCount: (state, action) => {
			state.pagesCount = Math.ceil(action.payload / state.limit);
		},
	},
});

export const {
	setActiveCategory,
	setActiveSort,
	setSearchQuery,
	setValue,
	setActivePage,
	setPagesCount,
} = querySlice.actions;
export default querySlice.reducer;
