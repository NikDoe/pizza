import styles from './Pagination.module.scss';
import PrevButton from './PrevButton';
import PagesList from './PagesList';
import NextButton from './NextButton';
import { useContext } from 'react';
import { PaginationContext } from '../../pages/Home';

export default function Pagination() {
	const { pagesCount, activePage } = useContext(PaginationContext);

	return (
		<div className={styles.root}>
			{pagesCount > 1 && activePage ? <PrevButton styles={styles} /> : ''}
			{pagesCount > 1 ? <PagesList styles={styles} /> : ''}
			{pagesCount > 1 && activePage !== pagesCount - 1 ? <NextButton styles={styles} /> : ''}
		</div>
	);
}
