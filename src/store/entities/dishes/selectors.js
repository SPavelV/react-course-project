import {
  selectRestaurantById,
  selectRestaurantEntities,
  selectRestaurantIds,
} from '../restaurant/selectors';
import { selectEntitiesModule } from '../selectors';

export const selectDishesModule = (state) => selectEntitiesModule(state).dishes;

export const selectDishesIds = (state) => selectDishesModule(state)?.ids;

export const selectDishesEntities = (state) =>
  selectDishesModule(state)?.entities;

export const selectDishById = (state, { id }) =>
  selectDishesEntities(state)?.[id];

export const selectDishesIdsFilteredByName = (state, { name }) => {
  const ids = selectDishesIds(state);
  if (!name) return ids;

  return ids?.filter((id) => {
    const dish = selectDishById(state, { id });
    return dish?.name?.toUpperCase()?.includes(name?.toUpperCase());
  });
};

export const selectIdsRestaurantsByDishes = (state, { dishId }) => {
  const restaurantIds = selectRestaurantIds(state);
  return restaurantIds?.filter((restaurantId) =>
    selectRestaurantById(state, { id: restaurantId })?.menu?.find(
      (id) => id === dishId
    )
  );
};

export const selectLoadingStatus = (state) => selectDishesModule(state).status;
