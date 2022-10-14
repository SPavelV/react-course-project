import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { ProductWithAuthorize } from '../Product/ProductWithAuthorize';

export const Menu = ({ productIds, className, isTouch }) => {
  console.log('render menu');
  console.log('productIds', productIds);
  return (
    <div
      className={classnames(styles.root, className, {
        [styles.rootTouch]: isTouch,
      })}
    >
      Menu
      {productIds &&
        productIds.map((id) => (
          <span key={id}>{id}</span>
          //   <ProductWithAuthorize
          //     key={product.id}
          //     name={product.name}
          //     price={product.price}
          //     className={styles.product}
          //   />
        ))}
    </div>
  );
};

export const MenuWithMemo = React.memo(Menu);
