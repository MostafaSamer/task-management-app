import React from 'react';
import styles from './index.module.scss';

const Card = ({ title, children }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Card;
