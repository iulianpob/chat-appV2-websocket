import styles from './username.module.css';
import userPhoto from '../../assets/user.jpg';
import clsx from 'clsx';

interface IUsernameProps {
  photo?: boolean;
  status?: boolean;
  inDetailsView?: boolean;
  display?: 'status' | 'lastMessage';
}

export const Username = ({ photo, inDetailsView, display }: IUsernameProps) => {
  return (
    <div className={styles.user}>
      {photo && (
        <img className={styles.user_photo} src={userPhoto} alt="user" />
      )}
      <div className={styles.user_info}>
        <span
          className={clsx(
            styles.user_name,
            inDetailsView ? styles.black : styles.primary
          )}
        >
          User Name
        </span>

        <span
          className={clsx(styles.status, inDetailsView ? styles.center : '')}
        >
          {display === 'status' ? 'status' : 'last message..'}
        </span>
      </div>
    </div>
  );
};
