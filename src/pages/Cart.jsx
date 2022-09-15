import CartTop from '../components/CartBlock/CartTop';
import CartItem from '../components/CartBlock/CartItem';
import CartBottom from '../components/CartBlock/CartBottom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from '../axios';
import { setCart } from '../store/slices/cartSlice';

export default function Cart() {
	const { cartItems } = useSelector(state => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get(`/cart`).then(res => {
			dispatch(setCart(res.data));
		});
	}, [dispatch]);

	return (
		<div className="cart">
			<CartTop />
			<div className="content__items">
				{cartItems.map((obj, index) => (
					<CartItem key={index} {...obj} />
				))}
			</div>
			<CartBottom />
		</div>
	);
}
