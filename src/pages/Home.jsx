import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPizzas } from '../store/slices/pizzasSlice';
import { setPagesCount } from '../store/slices/paginationSlice';

export default function Home() {
	const activeCategory = useSelector(state => state.filter.categoryIndex);
	const { activeSort } = useSelector(state => state.sort);
	const { activePage } = useSelector(state => state.pagination);
	const { pizzas } = useSelector(state => state.pizzas);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	const searchQuery = useSelector(state => state.search.inputSearchValue);

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	useEffect(() => {
		setIsLoading(true);

		const category = activeCategory ? 'category=' + activeCategory : '';
		const sortBy = activeSort.sortBy.replace('DESC', '');
		const order = activeSort.sortBy.includes('DESC') ? 'DESC' : 'ASC';
		const search = searchQuery ? `search=${searchQuery}` : '';

		axios
			.get(
				`http://localhost:9000/api/pizza?page=${
					activePage + 1
				}&${category}&sortBy=${sortBy}&order=${order}&${search}`,
			)
			.then(res => {
				const [allPizzas, count] = res.data;
				dispatch(setPizzas(allPizzas));
				dispatch(setPagesCount(count));
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [activeCategory, activeSort, searchQuery, activePage, dispatch]);

	return (
		<>
			<div className="content__top">
				<Categories allCategories={categories} />
				<Sort />
			</div>
			<h2 className="content__title">
				{activeCategory ? categories[activeCategory] : 'Все пиццы'}
			</h2>
			<div className="content__items">
				{isLoading
					? [...Array(6)].map((_, index) => <Skeleton key={index} />)
					: pizzas.map((obj, index) => <PizzaBlock key={index} {...obj} />)}
			</div>
			<Pagination />
		</>
	);
}
