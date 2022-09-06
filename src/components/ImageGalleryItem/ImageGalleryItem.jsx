import PropTypes from 'prop-types';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

export const ImagesGalleryItem = ({
  webformatURL,
  largeImageURL,
  toggleModal,
}) => {
  return (
    <li>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={largeImageURL}
        onClick={() => toggleModal(largeImageURL)}
      />
    </li>
  );
};

ImagesGalleryItem.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
