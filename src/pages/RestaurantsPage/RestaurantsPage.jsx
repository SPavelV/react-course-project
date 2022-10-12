import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { Tabs } from '../../components/Tabs/Tabs';
import { useDispatch, useSelector } from '../../CustomStore';
import { selectRestaurants } from '../../store/restaurant/selectors';
import { addRestaurant } from '../../store/restaurant/actions';
import styles from './styles.module.css';

import { restaurants as mock } from '../../constants/fixtures';
import { nanoid } from 'nanoid';

export const RestaurantsPage = () => {
  const restaurants = useSelector(selectRestaurants);
  const dispatch = useDispatch();

  if (!restaurants) return null;

  return (
    <Layout>
      <div className={styles.container}>
        <button
          onClick={() =>
            dispatch(
              addRestaurant({
                ...mock[0],
                id: nanoid(),
                name: nanoid(),
              })
            )
          }
        >
          add restaurant
        </button>
        <Tabs />
        <Restaurant restaurant={restaurants[0]} />
      </div>
    </Layout>
  );
};
