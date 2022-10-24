import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Product } from '../../components/Product/Product';
import { selectDishById } from '../../store/entities/dishes/selectors';

export const DishLinkContainer = ({ id, className }) => {
  const dish = useSelector((state) => selectDishById(state, { id }));

  if (!dish) return null;

  return (
    <Link to={id}>
      <Product name={dish.name} />
    </Link>
  );
};
