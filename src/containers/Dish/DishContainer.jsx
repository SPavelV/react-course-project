import React from 'react';
import { useSelector } from 'react-redux';
import { Dish } from '../../components/Dish/Dish';
import {
  selectDishById,
  selectIdsRestaurantsByDishes,
  selectLoadingStatus,
} from '../../store/entities/dishes/selectors';

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, { id }));
  const status = useSelector(selectLoadingStatus);

  const restaurantIds = useSelector((state) =>
    selectIdsRestaurantsByDishes(state, { dishId: id })
  );

  if (status === 'inProgress') {
    return <span>Loading...</span>;
  }
  if (status === 'failed') {
    return <span>Failed.</span>;
  }

  return (
    <Dish
      restaurantIds={restaurantIds}
      name={dish?.name}
      ingredients={dish?.ingredients}
      price={dish?.price}
    />
  );
};
