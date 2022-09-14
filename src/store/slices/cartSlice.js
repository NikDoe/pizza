import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: (state, action) => {
			state.cartItems = action.payload;
		},
		addItem: (state, action) => {
			state.totalPrice = state.totalPrice + action.payload.price;
		},
	},
});

export const { setCart, addItem } = cartSlice.actions;
export default cartSlice.reducer;
