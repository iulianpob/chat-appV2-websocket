import styles from './footer.module.css';
import { PiMicrophoneThin } from 'react-icons/pi';
import { PiCamera } from 'react-icons/pi';
import { IoIosAttach } from 'react-icons/io';
import { PiSmiley } from 'react-icons/pi';
import { VscSend } from 'react-icons/vsc';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <button className={styles.footer_button}>
        <PiMicrophoneThin />
      </button>
      <input
        type="text"
        placeholder="Type a message"
        className={styles.footer_input}
      />
      <div className={styles.footer_options}>
        <button className={styles.footer_button}>
          <IoIosAttach />
        </button>
        <button className={styles.footer_button}>
          <PiCamera />
        </button>
        <button className={styles.footer_button}>
          <PiSmiley />
        </button>
        <button className={styles.footer_button}>
          <VscSend />
        </button>
      </div>
    </div>
  );
};
