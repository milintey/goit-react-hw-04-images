import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ handleLoadMore, isDisabled }) => {
  return (
    <ButtonLoadMore
      disabled={isDisabled}
      type="button"
      onClick={handleLoadMore}
    >
      LOAD MORE
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
