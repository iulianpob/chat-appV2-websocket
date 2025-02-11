import { Username } from '../../../../components/Username/Username';
import styles from './header.module.css';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Username display="status" photo />
      <div className={styles.header_options}>
        <button className={styles.header_button}>
          <IoIosSearch />
        </button>
        <button className={styles.header_button}>
          <MdOutlineFavoriteBorder />
        </button>
      </div>
    </div>
  );
};
