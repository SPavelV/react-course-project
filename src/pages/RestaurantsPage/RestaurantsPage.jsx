import React, { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import styles from './styles.module.css';
import { RestaurantTabsContainer } from '../../containers/RestaurantTabs/RestaurantTabs';
import { RestaurantContainer } from '../../containers/Restaurant/RestaurantContainer';
import { BasketContainer } from '../../containers/Basket/BasketContainer';

export const RestaurantsPage = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState();

  return (
    <Layout>
      <div className={styles.container}>
        <RestaurantTabsContainer
          onTabSelect={(id) => setCurrentRestaurantId(id)}
        />
        {!!currentRestaurantId && (
          <RestaurantContainer id={currentRestaurantId} />
        )}
        <BasketContainer />
      </div>
    </Layout>
  );
};
