import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurants } from '../../components/Restaurants/Restaurants';
import { selectLoadingStatus } from '../../store/entities/restaurant/selectors';
import { loadRestaurantsIfNotExist } from '../../store/entities/restaurant/thunk/loadRestaurantsIfNotExist';

export const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
  }, []);

  return <Restaurants status={status} />;
};
