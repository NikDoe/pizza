import CartTop from '../components/CartBlock/CartTop';
import CartItem from '../components/CartBlock/CartItem';
import CartBottom from '../components/CartBlock/CartBottom';

export default function Cart() {
	return (
		<div className="cart">
			<CartTop />
			<div className="content__items">
				<CartItem />
			</div>
			<CartBottom />
		</div>
	);
}
