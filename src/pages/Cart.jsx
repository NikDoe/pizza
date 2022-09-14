import CartTop from '../components/CartBlock/CartTop';
import CartItem from '../components/CartBlock/CartItem';
import CartBottom from '../components/CartBlock/CartBottom';
import { useSelector } from 'react-redux';

export default function Cart() {
	const { cartItems } = useSelector(state => state.cart);

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
