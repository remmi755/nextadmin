import styles from "./report.module.css";

const Report = ({ report }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{report.title}</h3>
      <img className={styles.img} src={report.img} alt="" />
      <p className={styles.text}> {report.text}</p>
    </div>
  );
};

export default Report;
