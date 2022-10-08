import React, { useState } from 'react';
import styles from './styles.module.css';
import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div>{restaurant.name}</div>

      <button onClick={() => setCount(count + 1)}>Rerender</button>

      {restaurant.menu && (
        <Menu products={restaurant.menu} className={styles.menu} />
      )}
      <div>
        {restaurant.reviews && <Reviews reviews={restaurant.reviews} />}
      </div>
    </div>
  );
};
