import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import styles from './conversation.module.css';

export const Conversation = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.messages}></div>
      <Footer />
    </div>
  );
};
