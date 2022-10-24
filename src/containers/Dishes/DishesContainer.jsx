import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dishes } from '../../components/Dishes/Dishes';
import { selectLoadingStatus } from '../../store/entities/dishes/selectors';
import { loadDishesIfNotExist } from '../../store/entities/dishes/thunks/loadDishesIfNotExist';

export const DishesContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(loadDishesIfNotExist());
  }, []);

  return <Dishes status={status} />;
};
