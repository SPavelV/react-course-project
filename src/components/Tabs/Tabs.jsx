import React from 'react';
import { useSelector } from '../../CustomStore';
import { selectRestaurants } from '../../store/restaurant/selectors';

export const Tabs = () => {
  const restaurants = useSelector(selectRestaurants);

  if (!restaurants) return null;
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
};
