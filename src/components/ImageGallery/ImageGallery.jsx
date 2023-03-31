export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <li key={image.id}>
            <img
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => openModal(image.largeImageURL)}
            />
          </li>
        );
      })}
    </ul>
  );
};
