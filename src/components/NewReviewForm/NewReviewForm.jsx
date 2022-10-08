import React, { useReducer } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

const FORM_ACTIONS = {
  setName: 'setName',
  setText: 'setText',
};

const reducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.setName:
      return { ...state, name: action.payload, text: '' };
    case FORM_ACTIONS.setText:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export const NewReviewForm = ({ className }) => {
  const [form, dispatch] = useReducer(reducer, {});

  console.log('form :>> ', form);

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
    </div>
  );
};