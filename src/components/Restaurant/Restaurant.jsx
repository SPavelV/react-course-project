import React from 'react';
import styles from './styles.module.css';
import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.container}>
      <div>{restaurant.name}</div>
      {restaurant.menu && (
        <Menu products={restaurant.menu} className={styles.menu} />
      )}
      <div>
        {restaurant.reviews && <Reviews reviews={restaurant.reviews} />}
      </div>
    </div>
  );
};
