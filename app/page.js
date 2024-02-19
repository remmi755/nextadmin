import Link from "next/link";
import styles from '../app/ui/homepage/homepage.module.css'

const Homepage = () => {
  return (
    <div>
      <h1 className={styles.title}> Homepage</h1>
        <div className={styles.container}>
            <Link href={"/dashboard"}>
                <h2 className={styles.link}>Go to Dashboard</h2>
            </Link>
        </div>

    </div>
  );
};

export default Homepage;
