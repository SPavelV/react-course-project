import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductWithAuthorize } from '../../components/Product/ProductWithAuthorize';
import { selectProductById } from '../../store/entities/product/selectors';
import {
  addProductToBasket,
  removeProductFromBasket,
} from '../../store/ui/basket/actions';
import {
  selectProductCount,
  createSelectProductSum,
} from '../../store/ui/basket/selectors';

export const ProductContainer = ({ id, className }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, { id }));

  const selectProductSum = useCallback(createSelectProductSum(), []);

  const sum = useSelector((state) =>
    selectProductSum(state, { productId: id })
  );

  const productCount = useSelector((state) =>
    selectProductCount(state, { productId: id })
  );

  const increment = useCallback(
    () => dispatch(addProductToBasket({ productId: id })),
    [id]
  );

  const decrement = useCallback(
    () => dispatch(removeProductFromBasket({ productId: id })),
    [id]
  );

  if (!product) return null;
  return (
    <ProductWithAuthorize
      name={product.name}
      price={product.price}
      className={className}
      decrement={decrement}
      increment={increment}
      count={productCount}
      sum={sum}
    />
  );
};
