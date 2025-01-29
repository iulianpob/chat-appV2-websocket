import userPhoto from '../../assets/user.jpg';
import styles from './user.module.css';
import { VscEdit } from 'react-icons/vsc';
import clsx from 'clsx';

interface IUserProps {
  contact: boolean;
}

export const User = ({ contact }: IUserProps) => {
  return (
    <div
      className={clsx(
        styles.user_container,
        contact ? '' : styles.hover_effect
      )}
    >
      <div className={styles.user}>
        <img className={styles.user_photo} src={userPhoto} alt="user" />
        <div className={styles.user_info}>
          <span className={styles.user_name}>User Name</span>
          <span className={styles.status}>status</span>
        </div>
      </div>
      {contact ? (
        <button className={styles.edit_button}>
          <VscEdit />
        </button>
      ) : (
        <div className={styles.notification}>
          <span className={styles.notification_time}>10:35</span>
          <span className={styles.notification_number}>2</span>
        </div>
      )}
    </div>
  );
};
