import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dish } from '../../components/Dish/Dish';
import { Layout } from '../../components/Layout/Layout';
import { DishContainer } from '../../containers/Dish/DishContainer';
import { loadDishByProductIdIfNotExist } from '../../store/entities/dishes/thunks/loadDishByProductIdIfNotExist';

export const DishPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDishByProductIdIfNotExist(productId));
  }, [productId]);

  if (!productId) return null;

  return (
    <Layout>
      <DishContainer id={productId} />
    </Layout>
  );
};
