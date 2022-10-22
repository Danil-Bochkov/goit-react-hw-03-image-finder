import React, { Fragment } from 'react';
import Loader from './Loader';
import ImgErrorMessage from './ImgErrorMessage';
import ImageGalleryItem from './ImageGalleryItem';

export default class ImageGallery extends React.Component {
  render() {
    const { imgs, status, onToggle } = this.props;

    return (
      <Fragment>
        {status === 'idle' && (
          <div className="HeroLabel">Input the name of picture, please</div>
        )}
        {imgs.length === 0 && status === 'resolved' && (
          <ImgErrorMessage message={'No Imgs found'} />
        )}
        <ul className="ImageGallery">
          {imgs.length > 0 &&
            imgs.map((img, i) => {
              return (
                <ImageGalleryItem
                  key={i}
                  imgSrc={img.webformatURL}
                  imgTags={img.tags}
                  onImgToggle={() => onToggle(img.largeImageURL)}
                ></ImageGalleryItem>
              );
            })}
        </ul>
        {status === 'pending' && <Loader />}
      </Fragment>
    );
  }
}
