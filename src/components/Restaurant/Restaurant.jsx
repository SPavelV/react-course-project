import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { RestaurantContentTabsWithMemo } from '../RestaurantContentTabs/RestaurantContentTabs';
import { MenuContainer } from '../../containers/Menu/MenuContainer';
import { ReviewsContainer } from '../../containers/Reviews/ReviewsContainer';
import { StarRating } from '../StarRating/StarRating';

export const Restaurant = ({ id, name, rating }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  useEffect(() => {
    setCurrentTabIndex(0);
  }, [id]);

  return (
    <div className={styles.container}>
      <div>Ресторан: {name}</div>
      <StarRating rating={rating} />
      <RestaurantContentTabsWithMemo
        onTabSelect={(index) => setCurrentTabIndex(index)}
      />

      {currentTabIndex === 0 && (
        <MenuContainer restaurantId={id} className={styles.menu} />
      )}
      {currentTabIndex === 1 && <ReviewsContainer restaurantId={id} />}
    </div>
  );
};
