import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { OverlayModal, ModalDiv } from '../Modal/Modal.styled';

export const Modal = ({ image, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  return (
    <OverlayModal onClick={() => toggleModal()}>
      <ModalDiv>
        <img src={image} alt="" />
      </ModalDiv>
    </OverlayModal>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
