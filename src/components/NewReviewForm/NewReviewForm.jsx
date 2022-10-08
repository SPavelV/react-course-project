import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

export const NewReviewForm = ({ className }) => {
  const [value, setValue] = useState({ name: 'John', text: 'comment' });
  
  console.log('value', value);

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.formElement}>
        <span>Name</span>
        <input
          type='text'
          value={value.name}
          onChange={(evt) =>
            setValue({ ...value, name: evt.target.value, text: '' })
          }
        />
      </div>
      <div className={styles.formElement}>
        <span>Text</span>
        <input
          type='text'
          value={value.text}
          onChange={(evt) => setValue({ ...value, text: evt.target.value })}
        />
      </div>
    </div>
  );
};
