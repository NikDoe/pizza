export default function Categories({ category, setActiveCategory, allCategories }) {
	return (
		<div className="categories">
			<ul>
				{allCategories.map((value, index) => (
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
