import React from 'react';
import { RestaurantLinkContainer } from '../../containers/RestaurantLink/RestaurantLinkContainer';
import styles from './styles.module.css';

export const Dish = ({ name, price, ingredients, restaurantIds }) => {
  return (
    <div className={styles.root}>
      <h4>Name: {name}</h4>
      <p>Price: {price}</p>
      <p>Ingredients:</p>
      <ul>
        {ingredients?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p>Restaurants: </p>
      {restaurantIds?.map((id) => (
        <li key={id}>
          <RestaurantLinkContainer id={id} />
        </li>
      ))}
    </div>
  );
};
