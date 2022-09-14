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
			console.log(state.cartItems);
		},
	},
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
