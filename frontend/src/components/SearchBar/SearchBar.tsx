import styles from './search-bar.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.input_container}>
      <input className={styles.search_bar} placeholder="Search Here.." />
    </div>
  );
};
