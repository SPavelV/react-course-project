import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Menu } from '../../components/Menu/Menu';
import { loadProductsByProductIdIfNotExist } from '../../store/entities/product/thunks/loadProductsByRestaurantIdIfNotExist';
import { selectRestaurantProductsById } from '../../store/entities/restaurant/selectors';

export const MenuContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { restaurantId } = params;

  const productIds = useSelector((state) =>
    selectRestaurantProductsById(state, { id: restaurantId })
  );

  useEffect(() => {
    dispatch(loadProductsByProductIdIfNotExist(restaurantId));
  }, [restaurantId]);

  return <Menu productIds={productIds} />;
};
