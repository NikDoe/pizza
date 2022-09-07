import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search-icon.svg';
import clearIcon from '../../assets/img/clear.svg';

export default function Search({ searchQuery, setSearchQuery }) {
	return (
		<div className={styles.root}>
			<img className={styles.icon} src={searchIcon} alt="search icon" />
			<input
				className={styles.search}
				value={searchQuery}
				onChange={event => setSearchQuery(event.target.value)}
				placeholder="поиск пиццы..."
			/>
			{searchQuery && (
				<img
					onClick={() => setSearchQuery('')}
					className={styles.clear}
					src={clearIcon}
					alt="clear icon"
				/>
			)}
		</div>
	);
}
