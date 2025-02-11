import styles from './contacts.module.css';
import { User } from '../../components/User/User';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <User contact display="status" />
      <SearchBar />
      <hr className={styles.bar} />
      <div className={styles.contacts}>
        <User display="lastMessage" contact={false} />
        <User display="lastMessage" contact={false} />
        <User display="lastMessage" contact={false} />
        <User display="lastMessage" contact={false} />
      </div>
    </div>
  );
};
