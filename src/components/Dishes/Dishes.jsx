import React from 'react';
import { useSelector } from 'react-redux';
import { DishContainer } from '../../containers/Dish/DishContainer';
import { selectDishesIds } from '../../store/entities/dishes/selectors';
import styles from './styles.module.css';

export const Dishes = ({ status }) => {
  const dishesIds = useSelector(selectDishesIds);
  if (status === 'inProgress') {
    return <span>Loading...</span>;
  }
  if (status === 'failed') {
    return <span>Failed.</span>;
  }

  return (
    <div className={styles.root}>
      <h2>Dish list: </h2>
      {dishesIds.map((id) => (
        <DishContainer key={id} id={id} />
      ))}
    </div>
  );
};
