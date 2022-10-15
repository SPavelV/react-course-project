import React from 'react';
import { useSelector } from 'react-redux';
import { ProductWithAuthorize } from '../../components/Product/ProductWithAuthorize';
import { selectProductById } from '../../store/entities/product/selectors';

export const ProductContainer = ({ id, className }) => {
  const product = useSelector((state) => selectProductById(state, { id }));
  if (!product) return null;
  return (
    <ProductWithAuthorize
      name={product.name}
      price={product.price}
      className={className}
    />
  );
};
