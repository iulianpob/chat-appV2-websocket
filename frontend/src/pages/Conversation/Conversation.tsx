import { TestWebSocket } from '../../components/TestWebSocket/TestWebSocket';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import styles from './conversation.module.css';

export const Conversation = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.messages}>
        <TestWebSocket />
      </div>
      <Footer />
    </div>
  );
};
