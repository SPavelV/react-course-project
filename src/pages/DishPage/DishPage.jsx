import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { DishContainer } from '../../containers/Dish/DishContainer';
import { loadDishByProductIdIfNotExist } from '../../store/entities/dishes/thunks/loadDishByProductIdIfNotExist';
import { loadRestaurantsIfNotExist } from '../../store/entities/restaurant/thunk/loadRestaurantsIfNotExist';

export const DishPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDishByProductIdIfNotExist(productId));
    dispatch(loadRestaurantsIfNotExist());
  }, [productId]);

  if (!productId) return null;

  return (
    <Layout>
      <DishContainer id={productId} />
    </Layout>
  );
};
