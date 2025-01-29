import { SearchBar } from '../../components/SearchBar/SearchBar';
import styles from './contact-details.module.css';
import userPhoto from '../../assets/user.jpg';

export const ContactDetails = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <img src={userPhoto} alt="user" className={styles.user_photo} />
    </div>
  );
};
