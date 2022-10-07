import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { Tabs } from '../../components/Tabs/Tabs';
import styles from './styles.module.css';

export const RestaurantsPage = ({ restaurants }) => {
  console.log('restaurants', restaurants);
  return (
    <Layout>
      <div className={styles.container}>
        <Tabs />
        <Restaurant restaurant={restaurants[0]} />
      </div>
    </Layout>
  );
};
