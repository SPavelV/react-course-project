import React, { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { Tabs } from '../../components/Tabs/Tabs';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/restaurant/selectors';
import styles from './styles.module.css';
import { RestaurantTabsContainer } from '../../containers/RestaurantTabs/RestaurantTabs';

export const RestaurantsPage = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState();
  const restaurants = useSelector(selectRestaurantIds);

  if (!restaurants) return null;

  return (
    <Layout>
      <div className={styles.container}>
        <Tabs />
        <RestaurantTabsContainer />
        <Restaurant restaurant={restaurants[0]} />
      </div>
    </Layout>
  );
};
