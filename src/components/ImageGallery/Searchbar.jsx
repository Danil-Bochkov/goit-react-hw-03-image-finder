import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default class Searchbar extends React.Component {
  state = {
    input: '',
  };

  handleNameChange = e => {
    this.setState({ input: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.input.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <BiSearch />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleNameChange}
            value={this.state.input}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
