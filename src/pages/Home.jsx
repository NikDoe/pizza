import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { useEffect, useState } from 'react';

export default function Home() {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`http://localhost:9000/api/pizza?${activeCategory ? 'category=' + activeCategory : ''}`,
		)
			.then(res => res.json())
			.then(arr => {
				setPizzas(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [activeCategory]);

	return (
		<>
			<div className="content__top">
				<Categories
					category={activeCategory}
					setActiveCategory={index => setActiveCategory(index)}
				/>
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
