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

export const selectLoadingStatus = (state) => selectDishesModule(state).status;
