import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from '../../components/Menu/Menu';
import { loadProductsByProductIdIfNotExist } from '../../store/entities/product/thunks/loadProductsByRestaurantIdIfNotExist';
import { selectRestaurantProductsById } from '../../store/entities/restaurant/selectors';

export const MenuContainer = ({ restaurantId, className, isTouch }) => {
  const dispatch = useDispatch();

  const productIds = useSelector((state) =>
    selectRestaurantProductsById(state, { id: restaurantId })
  );

  useEffect(() => {
    dispatch(loadProductsByProductIdIfNotExist(restaurantId));
  }, [restaurantId]);

  return (
    <Menu productIds={productIds} className={className} isTouch={isTouch} />
  );
};
