import styles from "/app/ui/dashboard/reports/reports.module.css";
import Card from "@/app/ui/dashboard/card/card";
import Report from "@/app/ui/dashboard/report/report";

const reports = [
  {
    id: 1,
    title: "One report",
    img: "https://images.pexels.com/photos/4215102/pexels-photo-4215102.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae consectetur cumque delectus dignissimos dolore eaque error est ipsam ipsum odio odit, pariatur, perspiciatis placeat porro quaerat, quo tempora.",
  },
  {
    id: 2,
    title: "Two report",
    img: "https://images.pexels.com/photos/3733925/pexels-photo-3733925.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae consectetur cumque delectus dignissimos dolore eaque error est ipsam ipsum odio odit, pariatur, perspiciatis placeat porro quaerat, quo tempora.",
  },
  {
    id: 3,
    title: "Three report",
    img: "https://images.pexels.com/photos/2440299/pexels-photo-2440299.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae consectetur cumque delectus dignissimos dolore eaque error est ipsam ipsum odio odit, pariatur, perspiciatis placeat porro quaerat, quo tempora.",
  },
];
const ReportsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.reports}>
        {reports.map((report) => (
          <Report key={report.id} report={report} />
        ))}
      </div>
      <button className={styles.btn}>ADD NEW REPORT</button>
    </div>
  );
};

export default ReportsPage;
