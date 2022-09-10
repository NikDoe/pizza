import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search-icon.svg';
import clearIcon from '../../assets/img/clear.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../store/slices/SearchSlice';

export default function Search() {
	const searchQuery = useSelector(state => state.search.inputValue);
	const dispatch = useDispatch();

	const inputChangeHandler = event => {
		dispatch(setSearchQuery(event.target.value));
	};

	return (
		<div className={styles.root}>
			<img className={styles.icon} src={searchIcon} alt="search icon" />
			<input
				className={styles.search}
				value={searchQuery}
				onChange={event => inputChangeHandler(event)}
				placeholder="поиск пиццы..."
			/>
			{searchQuery && (
				<img
					onClick={() => dispatch(setSearchQuery(''))}
					className={styles.clear}
					src={clearIcon}
					alt="clear icon"
				/>
			)}
		</div>
	);
}
