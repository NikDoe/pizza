import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { createContext, useContext, useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

export const PaginationContext = createContext({});

export default function Home() {
	const [pizzas, setPizzas] = useState([]);
	const [pizzasCount, setPizzasCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeSort, setActiveSort] = useState({ name: 'популярности (0-10)', sortBy: 'rating' });
	const [activePage, setActivePage] = useState(0);

	const { searchQuery } = useContext(SearchContext);

	const limit = 4;
	const pagesCount = Math.ceil(pizzasCount / limit);

	useEffect(() => {
		setIsLoading(true);

		const category = activeCategory ? 'category=' + activeCategory : '';
		const sortBy = activeSort.sortBy.replace('DESC', '');
		const order = activeSort.sortBy.includes('DESC') ? 'DESC' : 'ASC';
		const search = searchQuery ? `search=${searchQuery}` : '';

		fetch(
			`http://localhost:9000/api/pizza?page=${
				activePage + 1
			}&${category}&sortBy=${sortBy}&order=${order}&${search}`,
		)
			.then(res => res.json())
			.then(arr => {
				const [allPizzas, count] = arr;
				setPizzas(allPizzas);
				setPizzasCount(count);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [activeCategory, activeSort, searchQuery, activePage]);

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
			<PaginationContext.Provider
				value={{ pizzasCount, pagesCount, activePage, setActivePage }}
			>
				<Pagination />
			</PaginationContext.Provider>
		</>
	);
}
