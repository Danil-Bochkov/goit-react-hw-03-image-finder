export default function ImageGalleryItem({ img, onToggle }) {
  return (
    <>
      {img?.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} className="ImageGalleryItem">
            <img
              className="ImageGalleryItem-image"
              src={webformatURL}
              onClick={() => onToggle(largeImageURL)}
            />
          </li>
        );
      })}
    </>
  );
}
