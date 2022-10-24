import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { DishesContainer } from '../../containers/Dishes/DishesContainer';

export const DishesPage = () => {
  return (
    <Layout>
      <DishesContainer />
    </Layout>
  );
};
