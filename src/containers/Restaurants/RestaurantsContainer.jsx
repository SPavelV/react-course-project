import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurants } from '../../components/Restaurants/Restaurants';
import { loadRestaurants } from '../../store/entities/restaurant/actions';
import { selectLoadingStatus } from '../../store/entities/restaurant/selectors';
import { loadUsers } from '../../store/entities/users/actions';

export const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return <Restaurants status={status} />;
};
