import React, { useReducer } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { StarInput } from '../StarInput/StarInput';

const FORM_ACTIONS = {
  setName: 'setName',
  setText: 'setText',
  setRating: 'setRating',
};

const reducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.setName:
      return { ...state, name: action.payload, text: '' };
    case FORM_ACTIONS.setText:
      return { ...state, text: action.payload };
    case FORM_ACTIONS.setRating:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const NewReviewForm = ({ className }) => {
  const [form, dispatch] = useReducer(reducer, {
    name: '',
    text: '',
    rating: 0,
  });

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.formElement}>
        <span>Name</span>
        <input
          type='text'
          value={form.name}
          onChange={(evt) => {
            dispatch({ type: FORM_ACTIONS.setName, payload: evt.target.value });
          }}
        />
      </div>
      <div className={styles.formElement}>
        <span>Text</span>
        <input
          type='text'
          value={form.text}
          onChange={(evt) => {
            dispatch({ type: FORM_ACTIONS.setText, payload: evt.target.value });
          }}
        />
      </div>
      <div className={styles.formElement}>
        <span>StarInput</span>
        <StarInput
          value={form.rating}
          onChange={(rating) => {
            dispatch({ type: FORM_ACTIONS.setRating, payload: rating });
          }}
        />
      </div>
    </div>
  );
};
