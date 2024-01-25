import React from 'react';
import styles from '../style/gradingScale.module.scss';

const GradingScale = ({ description = "Grading Scale: " }) => {
  const gradingScaleData = {
    Distinction: '96% - 100%',
    A: '86% - 95%',
    B: '76% - 85%',
    C: '66% - 75%',
    D: '56% - 65%',
    E: '50% - 55%',
    F: '0% - 49%',
  };

  const toList = Object.entries(gradingScaleData);
  const scaleList = toList.map(([grade, range], index) => {
    if (index < toList.length / 2) {
      return <li key={grade}>{grade}: {range}</li>;
    }
    return null; // Return null for the second part of the list
  });

  const secondScaleList = toList.map(([grade, range], index) => {
    if (index >= toList.length / 2) {
      return <li key={grade}>{grade}: {range}</li>;
    }
    return null; // Return null for the first part of the list
  });
  const secondScaleList2 = toList.map(([grade, range], index) => {
    if (index > toList.length / 2) {
      return <li key={grade}>{grade}: {range}</li>;
    }
    return null; // Return null for the first part of the list
  });

  return (
    <div className={styles.container}>
      <div className={styles.description_box}>
        {description}
      </div>
      <div className={styles.info_box}>
        <ul>
          {scaleList}
        </ul>
      </div>
      <div className={styles.info_box}>
        <ul>
          {secondScaleList}
        </ul>
      </div>
    </div>
  );
};

export default GradingScale;
