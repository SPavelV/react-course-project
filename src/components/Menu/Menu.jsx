import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { ProductContainer } from '../../containers/Product/ProductContainer';

export const Menu = ({ productIds, className, isTouch }) => {
  return (
    <div
      className={classnames(styles.root, className, {
        [styles.rootTouch]: isTouch,
      })}
    >
      Menu
      {productIds &&
        productIds.map((id) => (
          <ProductContainer className={styles.product} key={id} id={id} />
        ))}
    </div>
  );
};

export const MenuWithMemo = React.memo(Menu);
