import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from '../store/slices/pizzasSlice';
import { setPagesCount } from '../store/slices/querySlice';
import axios from 'axios';

export default function Home() {
	const { categoryIndex, activeSort, inputSearchValue, activePage } = useSelector(
		state => state.query,
	);
	const { pizzas } = useSelector(state => state.pizzas);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	useEffect(() => {
		setIsLoading(true);

		const category = categoryIndex ? 'category=' + categoryIndex : '';
		const sortBy = activeSort.sortBy.replace('DESC', '');
		const order = activeSort.sortBy.includes('DESC') ? 'DESC' : 'ASC';
		const search = inputSearchValue ? `search=${inputSearchValue}` : '';

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
	}, [categoryIndex, activeSort, inputSearchValue, activePage, dispatch]);

	return (
		<>
			<div className="content__top">
				<Categories allCategories={categories} />
				<Sort />
			</div>
			<h2 className="content__title">
				{categoryIndex ? categories[categoryIndex] : 'Все пиццы'}
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
