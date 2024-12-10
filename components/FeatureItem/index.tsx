import React from "react";
import styles from "./FeatureItem.module.css";

export const FeatureItem: React.FC<{
  id: number;
  title: string;
  selectedFeautureIndex: number;
  handleSelectedFeatureIndex: (id: number) => void;
}> = ({ id, title, selectedFeautureIndex, handleSelectedFeatureIndex }) => {
  return (
    <div
      className={`${styles.container} ${
        id === selectedFeautureIndex ? styles.active : styles.inactive
      } `}
      onClick={() => handleSelectedFeatureIndex(id)}
    >
      <span className={styles.backButton}>&lt;</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
