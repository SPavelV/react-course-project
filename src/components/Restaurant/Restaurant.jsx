import React, { useState } from 'react';
import styles from './styles.module.css';
import { Menu, MenuWithMemo } from '../Menu/Menu';
import { Reviews, ReviewsWithMemo } from '../Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div>{restaurant.name}</div>

      <button onClick={() => setCount(count + 1)}>Rerender</button>

      {restaurant.menu && (
        <MenuWithMemo products={restaurant.menu} className={styles.menu} />
      )}
      <div>
        {restaurant.reviews && <ReviewsWithMemo  reviews={restaurant.reviews} />}
      </div>
    </div>
  );
};
