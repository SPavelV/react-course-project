import React from 'react';
import styles from './styles.module.css';
import { RestaurantContentTabsWithMemo } from '../RestaurantContentTabs/RestaurantContentTabs';
import { StarRating } from '../StarRating/StarRating';
import { Outlet } from 'react-router-dom';

export const Restaurant = ({ id, name, rating }) => {
  return (
    <div className={styles.container}>
      <div>Ресторан: {name}</div>

      <StarRating rating={rating} />

      <RestaurantContentTabsWithMemo />

      <Outlet />
    </div>
  );
};
