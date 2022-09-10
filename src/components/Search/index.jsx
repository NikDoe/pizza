import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search-icon.svg';
import clearIcon from '../../assets/img/clear.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setValue } from '../../store/slices/SearchSlice';
import { useMemo, useRef } from 'react';
import debounce from 'lodash.debounce';

export default function Search() {
	const value = useSelector(state => state.search.inputValue);
	const dispatch = useDispatch();

	const searchInput = useRef(null);

	const updateSearchQuery = useMemo(
		() => debounce(str => dispatch(setSearchQuery(str)), 500),
		[dispatch],
	);

	const inputChangeHandler = event => {
		dispatch(setValue(event.target.value));
		updateSearchQuery(event.target.value);
	};

	const clearAndFocusInput = () => {
		dispatch(setSearchQuery(''));
		dispatch(setValue(''));
		searchInput.current.focus();
	};

	return (
		<div className={styles.root}>
			<img className={styles.icon} src={searchIcon} alt="search icon" />
			<input
				ref={searchInput}
				className={styles.search}
				value={value}
				onChange={inputChangeHandler}
				placeholder="поиск пиццы..."
			/>
			{value && (
				<img
					onClick={() => clearAndFocusInput()}
					className={styles.clear}
					src={clearIcon}
					alt="clear icon"
				/>
			)}
		</div>
	);
}
