import React from 'react';
import Searchbar from './ImageGallery/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './ImageGallery/Modal';
import Button from './ImageGallery/Button';

import './style.css';

class App extends React.Component {
  state = {
    largeImgSrc: '',
    input: '',
    img: [],
    page: 1,
    pageLimit: 12,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page === this.state.page &&
      prevState.input === this.state.input
    ) {
      return;
    }

    const nextName = this.state.input;
    const { page, pageLimit } = this.state;

    this.setState(() => {
      return { status: 'pending' };
    });
    fetch(
      `https://pixabay.com/api/?key=30720902-e9bde465b51dd4db5e7191c0a&q=${nextName}&page=${page}&image_type=photo&orientation=horizontal&per_page=${pageLimit}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`Oops... we don't know what is this ${nextName}.`)
        );
      })
      .then(imgList => {
        this.setState(prevState => {
          return {
            img: [...prevState.img, ...imgList.hits],
            status: 'resolved',
          };
        });
      })
      .catch(error =>
        this.setState(() => {
          return { error, status: 'rejected' };
        })
      );
  }

  handleFormSubmit = input => {
    this.setState({ input, img: [], page: 1 });
  };

  onImgClick = largeImageURL => {
    this.setState({ largeImgSrc: largeImageURL });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleImg = () => {
    this.setState({ largeImgSrc: '' });
  };

  render() {
    const { largeImgSrc, img, error, status } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          imgs={img}
          error={error}
          status={status}
          onToggle={this.onImgClick}
        ></ImageGallery>
        {img.length > 0 && <Button onClick={this.loadMore} />}
        {largeImgSrc && (
          <Modal onClose={this.toggleImg}>
            <img src={largeImgSrc} alt={this.nextName} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
