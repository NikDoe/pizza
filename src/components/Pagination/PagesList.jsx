import { useContext } from 'react';
import { PaginationContext } from '../../pages/Home';

export default function PagesList({ styles }) {
	const { pagesCount, activePage, setActivePage } = useContext(PaginationContext);

	const pages = [];
	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1);
	}

	return (
		<ul>
			{pages.map((page, index) => (
				<li
					key={index}
					onClick={() => {
						setActivePage(index);
					}}
					className={activePage === index ? styles.active : ''}
				>
					{page}
				</li>
			))}
		</ul>
	);
}
