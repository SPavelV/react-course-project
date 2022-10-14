import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from '../../components/Menu/Menu';
import { selectRestaurantProductsById } from '../../store/restaurant/selectors';

export const MenuContainer = ({ restaurantId, className, isTouch }) => {
  const productIds = useSelector((state) =>
    selectRestaurantProductsById(state, { id: restaurantId })
  );

  console.log('productIds :>> ', productIds);
  return (
    <Menu productIds={productIds} className={className} isTouch={isTouch} />
  );
};
