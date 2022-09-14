import Categories from '../components/Categories';
import Sort, { sortList } from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { useEffect, useRef, useState } from 'react';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from '../store/slices/pizzasSlice';
import { setPagesCount, setQuery } from '../store/slices/querySlice';
import { setCart } from '../store/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export default function Home() {
	const { categoryIndex, activeSort, inputSearchValue, activePage } = useSelector(
		state => state.query,
	);
	const { pizzas } = useSelector(state => state.pizzas);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const isQueryParams = useRef(false);
	const isAppFirstRender = useRef(false);

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	const fetchPizzas = () => {
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
	};

	useEffect(() => {
		if (window.location.search) {
			const queryParams = qs.parse(window.location.search.substring(1));

			const sort = sortList.find(obj => obj.sortBy === queryParams.activeSort);

			dispatch(
				setQuery({
					...queryParams,
					sort,
				}),
			);
		}
	}, [dispatch]);

	useEffect(() => {
		window.scrollTo(0, 0);

		if (!isQueryParams.current) fetchPizzas();
		isQueryParams.current = false;
	}, [categoryIndex, activeSort, inputSearchValue, activePage, dispatch]);

	useEffect(() => {
		axios.get(`http://localhost:9000/api/cart`).then(res => {
			dispatch(setCart(res.data));
		});
	}, [dispatch]);

	useEffect(() => {
		if (isAppFirstRender.current) {
			const queryString = qs.stringify(
				{
					activePage,
					categoryIndex,
					activeSort: activeSort.sortBy,
				},
				{ addQueryPrefix: true },
			);

			navigate(`${queryString}`);
		}
		isAppFirstRender.current = true;
	}, [categoryIndex, activeSort, activePage, navigate]);

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
