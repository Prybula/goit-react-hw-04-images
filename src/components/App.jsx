import { useEffect, useState } from 'react';
import { fetchImages } from 'service/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchImages(query, page).then(data => {
      if (data.hits.length === 0) {
        alert('We did not find any photos');
      }
      setImages(prevState => [...prevState, ...data.hits]);
      setShowBtn(page < Math.ceil(data.totalHits / 12));
    });
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setModalImage('');
    setShowBtn(false);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {showBtn && (
        <button type="button" onClick={loadMore}>
          Load More
        </button>
      )}
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} onClose={openModal} />
      )}
    </>
  );
};
