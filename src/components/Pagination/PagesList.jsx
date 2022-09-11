import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../store/slices/paginationSlice';

export default function PagesList({ styles }) {
	const { activePage, pagesCount } = useSelector(state => state.pagination);
	const dispatch = useDispatch();

	const activePageHandler = index => {
		dispatch(setActivePage(index));
	};

	const pages = [];
	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1);
	}

	return (
		<ul>
			{pages.map((page, index) => (
				<li
					key={index}
					onClick={() => activePageHandler(index)}
					className={activePage === index ? styles.active : ''}
				>
					{page}
				</li>
			))}
		</ul>
	);
}
