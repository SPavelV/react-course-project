import React from 'react';
import { WithAuthorize } from '../../hoc/WithAuthorize';
import { Product } from './Product';
import { ProductWithSale } from './ProductWithSale';

export const ProductWithAuthorize = WithAuthorize({
  ComponentAuthorized: ProductWithSale,
  ComponentUnAuthorized: Product,
});
