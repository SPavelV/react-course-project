import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../../components/Product/Product';
import { selectDishById } from '../../store/entities/dishes/selectors';

export const DishContainer = ({ id, className }) => {
  const dish = useSelector((state) => selectDishById(state, { id }));
  console.log('dish', dish);

  if (!dish) return null;

  return <Product name={dish.name} />;
};
