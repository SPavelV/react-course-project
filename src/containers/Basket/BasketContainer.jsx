import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Basket } from '../../components/Basket/Basket';
import { cleanBasket } from '../../store/ui/basket/actions';
import {
  selectBasketSum,
  selectProductIds,
} from '../../store/ui/basket/selectors';

export const BasketContainer = () => {
  const productIds = useSelector(selectProductIds);
  const sum = useSelector(selectBasketSum);
  const dispatch = useDispatch();

  const onClickClear = () => dispatch(cleanBasket());

  if (!productIds) return null;

  return (
    <Basket productIds={productIds} sum={sum} onClickClear={onClickClear} />
  );
};
