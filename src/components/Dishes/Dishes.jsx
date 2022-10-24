import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DishLinkContainer } from '../../containers/DishLink/DishLinkContainer';
import { selectDishesIdsFilteredByName } from '../../store/entities/dishes/selectors';
import styles from './styles.module.css';

export const Dishes = ({ status }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchDishesIds = useSelector((state) =>
    selectDishesIdsFilteredByName(state, {
      name: searchParams.get('productName'),
    })
  );

  const onChangeInput = (event) => {
    setSearchParams({ productName: event.target.value });
  };

  if (status === 'inProgress') {
    return <span>Loading...</span>;
  }
  if (status === 'failed') {
    return <span>Failed.</span>;
  }

  return (
    <div className={styles.root}>
      <h2>Dish list: </h2>

      <input
        value={searchParams.get('productName') || ''}
        onChange={onChangeInput}
      />
      {searchDishesIds &&
        searchDishesIds.map((id) => <DishLinkContainer key={id} id={id} />)}
    </div>
  );
};
