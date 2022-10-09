import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { ReactComponent as Star } from './img/star-gold.svg';
// import img from './img/star-gold.svg';

export const Review = ({ className, userName, text, rating }) => {
  console.log('render Review');

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.user}>
        <div className={styles.name}>User: {userName}</div>
        <div className={styles.rating}>Rating: {rating}</div>
        {/* <div className={styles.star}></div> */}
        {/* <img src={img} alt='star' /> */}
        <Star className={styles.starComponent} />

      </div>
      <div className={styles.comment}>Comment: {text}</div>
    </div>
  );
};
