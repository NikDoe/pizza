import styles from './Pagination.module.scss';

export default function Pagination({ pizzasCount, activePage, setActivePage }) {
	const limit = 4;
	const pagesCount = Math.ceil(pizzasCount / limit);
	const pages = [];
	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1);
	}

	console.log(pizzasCount);

	return (
		<div className={styles.root}>
			{activePage ? (
				<div onClick={() => setActivePage(activePage - 1)} className={styles.button}>
					{'<'}
				</div>
			) : (
				''
			)}
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
			{activePage === pagesCount - 1 ? (
				''
			) : (
				<div onClick={() => setActivePage(activePage + 1)} className={styles.button}>
					вперед.
				</div>
			)}
		</div>
	);
}
