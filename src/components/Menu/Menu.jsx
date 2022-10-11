import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { Product } from '../Product/Product';

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
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            className={styles.product}
          />
        ))}
    </div>
  );
};
