import styles from "./Spinner.module.css";

export const Spinner: React.FC = () => {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
