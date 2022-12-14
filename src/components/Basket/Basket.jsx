import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { ProductContainer } from '../../containers/Product/ProductContainer';

export const Basket = ({ productIds, sum, className, onClickClear }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <h2>Корзина</h2>

      <div className={styles.products}>
        {productIds.map((id) => (
          <ProductContainer className={styles.product} key={id} id={id} />
        ))}
      </div>

      <div className={styles.sum}>Итого: {sum} р.</div>

      <button onClick={onClickClear}>Очитстить корзину</button>
    </div>
  );
};
