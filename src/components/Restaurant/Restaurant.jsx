import React, { useState } from 'react';
import styles from './styles.module.css';
import { MenuWithMemo } from '../Menu/Menu';
import { ReviewsWithMemo } from '../Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
  const [count, setCount] = useState(0);

  // const average = Math.round(
  //   restaurant.reviews.reduce((sum, num) => (sum += num.rating), 0) /
  //     restaurant.reviews.length
  // );

  return (
    <div className={styles.container}>
      <div>{restaurant.name}</div>
      {/* {average && <div>Average: {average}</div>} */}

      {/* <button onClick={() => setCount(count + 1)}>Rerender</button>

      {restaurant.menu && (
        <MenuWithMemo products={restaurant.menu} className={styles.menu} />
      )}
      <div>
        {restaurant.reviews && <ReviewsWithMemo reviews={restaurant.reviews} />}
      </div> */}
    </div>
  );
};
