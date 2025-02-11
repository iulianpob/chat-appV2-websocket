import styles from './user.module.css';
import { VscEdit } from 'react-icons/vsc';
import clsx from 'clsx';
import { Username } from '../Username/Username';

interface IUserProps {
  contact: boolean;
  display: 'status' | 'lastMessage';
}

export const User = ({ contact, display }: IUserProps) => {
  return (
    <div
      className={clsx(
        styles.user_container,
        contact ? '' : styles.hover_effect
      )}
    >
      <Username inDetailsView={false} photo display={display} />
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
