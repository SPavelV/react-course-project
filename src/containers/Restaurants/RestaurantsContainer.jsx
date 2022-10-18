import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurants } from '../../components/Restaurants/Restaurants';
import { loadRestaurants } from '../../store/entities/restaurant/actions';
import { selectLoadingStatus } from '../../store/entities/restaurant/selectors';


export const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return <Restaurants status={status} />;
};
