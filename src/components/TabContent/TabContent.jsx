import React from 'react';
import { useParams } from 'react-router-dom';
import { MenuContainer } from '../../containers/Menu/MenuContainer';
import { ReviewsContainer } from '../../containers/Reviews/ReviewsContainer';
import styles from './styles.module.css';

export const TabContent = () => {
  const params = useParams();
  const { tabId, restaurantId } = params;

  return (
    <div>
      {tabId === '0' && (
        <MenuContainer restaurantId={restaurantId} className={styles.menu} />
      )}
      {tabId === '1' && <ReviewsContainer restaurantId={restaurantId} />}
    </div>
  );
};
