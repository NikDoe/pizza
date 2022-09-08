import styles from './Pagination.module.scss';
import PrevButton from './PrevButton';
import PagesList from './PagesList';
import NextButton from './NextButton';
import { useContext } from 'react';
import { PaginationContext } from '../../pages/Home';

export default function Pagination() {
	const { pizzasCount, pagesCount, activePage } = useContext(PaginationContext);

	return (
		<div className={styles.root}>
			{activePage && pizzasCount !== 0 ? <PrevButton styles={styles} /> : ''}
			{pagesCount > 1 ? <PagesList styles={styles} /> : ''}
			{activePage === pagesCount - 1 || pizzasCount === 0 ? (
				''
			) : (
				<NextButton styles={styles} />
			)}
		</div>
	);
}
