import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { useEffect, useState } from 'react';

export default function Home() {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeSort, setActiveSort] = useState({ name: 'популярности (0-10)', sortBy: 'rating' });

	useEffect(() => {
		setIsLoading(true);

		const category = activeCategory ? 'category=' + activeCategory : '';
		const sortBy = activeSort.sortBy.replace('DESC', '');
		const order = activeSort.sortBy.includes('DESC') ? 'DESC' : 'ASC';

		fetch(`http://localhost:9000/api/pizza?${category}&sortBy=${sortBy}&order=${order}`)
			.then(res => res.json())
			.then(arr => {
				setPizzas(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [activeCategory, activeSort]);

	return (
		<>
			<div className="content__top">
				<Categories
					category={activeCategory}
					setActiveCategory={index => setActiveCategory(index)}
				/>
				<Sort activeSort={activeSort} setActiveSort={sortBy => setActiveSort(sortBy)} />
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
