import { useState } from 'react';

export default function Categories() {
	const [activeCategory, setActiveCategory] = useState(0);

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	const addActiveClass = index => {
		setActiveCategory(index);
	};
	return (
		<div className="categories">
			<ul>
				{categories.map((value, index) => (
					<li
						key={index}
						onClick={() => {
							addActiveClass(index);
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
