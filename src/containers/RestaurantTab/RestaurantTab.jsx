import React from 'react';
import { Tab } from '../../components/Tab/Tab';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/entities/restaurant/selectors';
import { Link } from 'react-router-dom';

export const RestaurantTabContainer = ({ id, onTabSelect }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id })
  );

  if (!restaurant) return null;
  return (
    <Link to={id}>
      <Tab
        key={id}
        name={restaurant.name}
        id={id}
        onClick={() => onTabSelect(id)}
      />
    </Link>
  );
};
