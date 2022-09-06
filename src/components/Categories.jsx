export default function Categories({ category, setActiveCategory }) {
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
	return (
		<div className="categories">
			<ul>
				{categories.map((value, index) => (
					<li
						key={index}
						onClick={() => {
							setActiveCategory(index);
						}}
						className={category === index ? 'active' : ''}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}
