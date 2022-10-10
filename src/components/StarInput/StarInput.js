import classnames from 'classnames';
import styles from './styles.module.css';
import { ReactComponent as Star } from '../../assets/icons/star-gold.svg';

const MAX_LENGTH_STAR_RATING = 5;

export const StarInput = ({ className, onChange, value }) => {
  const onClickHandler = (rating) => {
    if (typeof onChange === 'function') {
      onChange(rating);
    }
  };

  return (
    <div className={classnames(styles.root, className)}>
      {new Array(MAX_LENGTH_STAR_RATING).fill().map((_, i) => {
        return (
          <Star
            onClick={() => onClickHandler(i + 1)}
            key={i}
            className={classnames(styles.star, {
              [styles.starGold]: i < value,
            })}
          />
        );
      })}
    </div>
  );
};
