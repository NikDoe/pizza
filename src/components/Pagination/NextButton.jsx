import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../store/slices/querySlice';

export default function NextButton({ styles }) {
	const { activePage } = useSelector(state => state.query);
	const dispatch = useDispatch();

	const activePageHandler = () => {
		dispatch(setActivePage(activePage + 1));
	};

	return (
		<div onClick={activePageHandler} className={styles.button}>
			вперед.
		</div>
	);
}
