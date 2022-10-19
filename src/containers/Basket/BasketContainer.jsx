import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Basket } from '../../components/Basket/Basket';
import { basketActions } from '../../store/ui/basket';
import {
  selectBasketSum,
  selectProductIds,
} from '../../store/ui/basket/selectors';

export const BasketContainer = () => {
  const productIds = useSelector(selectProductIds);
  const sum = useSelector(selectBasketSum);
  const dispatch = useDispatch();

  const onClickClear = useCallback(() => dispatch(basketActions.clean()), []);

  return (
    <Basket productIds={productIds} sum={sum} onClickClear={onClickClear} />
  );
};
