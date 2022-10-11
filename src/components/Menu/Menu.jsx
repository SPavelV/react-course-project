import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { ProductWithAuthorize } from '../Product/ProductWithAuthorize';

export const Menu = ({ products, className, isTouch }) => {
  console.log('render menu');

  return (
    <div
      className={classnames(styles.root, className, {
        [styles.rootTouch]: isTouch,
      })}
    >
      {products &&
        products.map((product) => (
          <ProductWithAuthorize
            key={product.id}
            name={product.name}
            price={product.price}
            className={styles.product}
          />
        ))}
    </div>
  );
};
