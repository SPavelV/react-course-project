import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../Tab/Tab';
import styles from './styles.module.css';

export const RestaurantTab = ({ id, name }) => {
  return (
    <NavLink
      to={id}
      className={({ isActive }) =>
        classNames(styles.root, {
          [styles.active]: isActive,
        })
      }
    >
      <Tab name={name} id={id} />
    </NavLink>
  );
};
