import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	itemCount: 0,
	totalPrice: 0,
	totalCount: 0,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: (state, action) => {
			state.cartItems = action.payload;
			state.totalPrice = state.cartItems.reduce((sum, obj) => obj.price * obj.count + sum, 0);
			state.totalCount = state.cartItems.reduce((sum, obj) => obj.count + sum, 0);
		},
	},
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
