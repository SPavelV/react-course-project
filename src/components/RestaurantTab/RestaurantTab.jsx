import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../Tab/Tab';
import styles from './styles.module.css';

export const RestaurantTab = ({ id, restaurantName }) => {
  return (
    <NavLink
      to={id}
      className={({ isActive }) =>
        classNames(styles.root, {
          [styles.active]: isActive,
        })
      }
    >
      <Tab name={restaurantName} id={id} />
    </NavLink>
  );
};
