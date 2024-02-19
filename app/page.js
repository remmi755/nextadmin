import Link from "next/link";
import styles from '../app/ui/homepage/homepage.module.css'

const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Homepage</h1>
      <Link href={"/dashboard"}>
        <h2 className={styles.link}>Go to Dashboard</h2>
      </Link>
    </div>
  );
};

export default Homepage;
