import React, { Fragment } from 'react';
import Loader from './Loader';
import ImgErrorMessage from './ImgErrorMessage';

export default class ImageGallery extends React.Component {
  render() {
    const { img, status } = this.props;

    return (
      <Fragment>
        {status === 'idle' && (
          <div className="HeroLabel">Input the name of picture, please</div>
        )}
        {img.length === 0 && status === 'resolved' && (
          <ImgErrorMessage message={'No Imgs found'} />
        )}
        <ul className="ImageGallery">{this.props.children}</ul>
        {status === 'pending' && <Loader />}
      </Fragment>
    );
  }
}
