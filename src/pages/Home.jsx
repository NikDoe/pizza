import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { useEffect, useState } from 'react';

export default function Home() {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:9000/api/pizza')
			.then(res => res.json())
			.then(arr => {
				setPizzas(arr);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...Array(6)].map((_, index) => <Skeleton key={index} />)
					: pizzas.map((obj, index) => <PizzaBlock key={index} {...obj} />)}
			</div>
		</>
	);
}
