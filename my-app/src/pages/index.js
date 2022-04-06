import styles from "../styles/Home.module.css";
import Header from "./Components/Header";
import Posts from './Components/Posts'
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Posts />
      </main>
      <div className={styles.card}>
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  );
}
