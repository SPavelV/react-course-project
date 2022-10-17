import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { RestaurantsContainer } from '../../containers/Restaurants/RestaurantsContainer';
import styles from './styles.module.css';

export const RestaurantsPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <RestaurantsContainer />
      </div>
    </Layout>
  );
};
