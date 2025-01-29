import { ContactDetails } from '../../pages/ContactDetails/ContactDetails';
import { Contacts } from '../../pages/Contacts/Contacts';
import { Conversation } from '../../pages/Conversation/Conversation';
import styles from './layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Contacts />
      <Conversation />
      <ContactDetails />
    </div>
  );
};
