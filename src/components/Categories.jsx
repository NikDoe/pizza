import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../store/slices/querySlice';

export default function Categories({ allCategories }) {
	const activeCategory = useSelector(state => state.query.categoryIndex);
	const dispatch = useDispatch();

	return (
		<div className="categories">
			<ul>
				{allCategories.map((value, index) => (
					<li
						key={index}
						onClick={() => {
							dispatch(setActiveCategory(index));
						}}
						className={activeCategory === index ? 'active' : ''}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}
