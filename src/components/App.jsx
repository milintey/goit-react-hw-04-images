import { useState, useEffect } from 'react';
import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { Searcbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { axiosGet } from 'helpers/AxiosGetPixabay';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { AppDiv } from './App.styled';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }

    setIsLoading(true);

    axiosGet(query, page)
      .then(response => setImages(prevImages => [...prevImages, ...response]))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [page, query]);

  const formSubmit = event => {
    event.preventDefault();

    setQuery(event.currentTarget.elements.query.value);
    setPage(1);
    setImages([]);

    event.currentTarget.reset();
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = image => {
    if (image) {
      setIsModalOpen(true);
      setModalImage(image);
      return;
    }
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <AppDiv>
      <Searcbar isDisabled={isLoading} formSubmit={formSubmit} />

      <ImageGallery images={images} toggleModal={toggleModal} />

      {isLoading && <Loader />}

      {images.length !== 0 && !isLoading && (
        <Button isDisabled={isLoading} handleLoadMore={handleLoadMore} />
      )}
      {isModalOpen && <Modal image={modalImage} toggleModal={toggleModal} />}
      <GlobalStyle />
    </AppDiv>
  );
};
