import React, { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { Tabs } from '../../components/Tabs/Tabs';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/restaurant/selectors';
import styles from './styles.module.css';
import { RestaurantTabsContainer } from '../../containers/RestaurantTabs/RestaurantTabs';
import { RestaurantContainer } from '../../containers/Restaurant/RestaurantContainer';

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
      </div>
    </Layout>
  );
};
