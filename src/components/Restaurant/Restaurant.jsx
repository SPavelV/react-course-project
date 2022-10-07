import React from 'react';
import styles from './styles.module.css';
import { Menu } from '../Menu/Menu';

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.container}>
      <div>{restaurant.name}</div>
      {restaurant.menu && (
        <Menu products={restaurant.menu} className={styles.menu} />
      )}
      <div>RestaurantReviews</div>
    </div>
  );
};
