"use client";

import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
import { useEffect, useState } from "react";

// function Counter({ val, time }) {
//   const [currVal, setCurrVal] = useState(0);
//
//   useEffect(() => {
//     currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
//   }, [currVal]);
//
//   return <div>{currVal}</div>;
// }

function Counter({ val, time }) {
  const [currVal, setCurrVal] = useState(0);

  useEffect(() => {
    val !== currVal && setTimeout(setCurrVal, time, currVal + 1);
  }, [currVal]);

  return <div>{currVal}</div>;
}
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>
          <Counter val={333} time={1} />
        </span>
        {/*<span className={styles.number}>10.273</span>*/}
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
