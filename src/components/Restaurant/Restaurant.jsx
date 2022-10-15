import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { RestaurantContentTabsWithMemo } from '../RestaurantContentTabs/RestaurantContentTabs';
import { MenuContainer } from '../../containers/Menu/MenuContainer';
import { ReviewsContainer } from '../../containers/Reviews/ReviewsContainer';

export const Restaurant = ({ id, name }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  useEffect(() => {
    setCurrentTabIndex(0);
  }, [id]);

  // const average = Math.round(
  //   restaurant.reviews.reduce((sum, num) => (sum += num.rating), 0) /
  //     restaurant.reviews.length
  // );

  return (
    <div className={styles.container}>
      <div>Ресторан: {name}</div>
      <RestaurantContentTabsWithMemo
        onTabSelect={(index) => setCurrentTabIndex(index)}
      />
      {/* {average && <div>Average: {average}</div>}
      <button onClick={() => setCount(count + 1)}>Rerender</button> */}

      {currentTabIndex === 0 && (
        <MenuContainer restaurantId={id} className={styles.menu} />
      )}
      {currentTabIndex === 1 && <ReviewsContainer restaurantId={id} />}
    </div>
  );
};
