import { useContext } from 'react';
import { PaginationContext } from '../../pages/Home';

export default function NextButton({ styles }) {
	const { activePage, setActivePage } = useContext(PaginationContext);

	return (
		<div onClick={() => setActivePage(activePage + 1)} className={styles.button}>
			вперед.
		</div>
	);
}
