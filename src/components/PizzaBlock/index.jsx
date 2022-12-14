import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../store/slices/cartSlice';
import axios from '../../axios';

export default function PizzaBlock({ id, title, price, src, sizes, types }) {
	const [activeSize, setActiveSize] = useState(0);
	const [activeType, setActiveType] = useState(0);
	const { cartItems } = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const typeNames = ['тонкое', 'традиционное'];

	const addItemHandler = async () => {
		const item = {
			pizzaId: id,
			title,
			price,
			src,
			size: sizes[activeSize],
			type: typeNames[activeType],
		};

		const cartItem = cartItems.find(
			obj => obj.pizzaId === item.pizzaId && obj.size === item.size && obj.type === item.type,
		);

		const { data } = cartItem
			? await axios.patch('/cart', item)
			: await axios.post('/cart', item);

		await axios.get(`/cart`).then(res => {
			dispatch(setCart(res.data));
		});
	};

	return (
		<div className="pizza-block__wrapper">
			<div className="pizza-block">
				<img className="pizza-block__image" src={src} alt="Pizza" />
				<h4 className="pizza-block__title">{title}</h4>
				<div className="pizza-block__selector">
					<ul>
						{types.map((type, index) => (
							<li
								onClick={() => setActiveType(index)}
								key={index}
								className={activeType === index ? 'active' : ''}
							>
								{index ? 'традиционное' : 'тонкое'}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, index) => (
							<li
								onClick={() => setActiveSize(index)}
								key={index}
								className={activeSize === index ? 'active' : ''}
							>
								{size} см.
							</li>
						))}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">от {price} ₽</div>
					<div className="button button--outline button--add">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span onClick={addItemHandler}>Добавить</span>
						{/*{addedCount > 0 && <i>{addedCount}</i>}*/}
					</div>
				</div>
			</div>
		</div>
	);
}
