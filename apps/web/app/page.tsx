import styles from './page.module.css';
import { MyForm } from './components/form/MyForm3';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <MyForm />
        </div>
      </main>
    </div>
  );
}
