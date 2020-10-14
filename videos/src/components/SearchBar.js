import React from 'react';

class SearchBar extends React.Component {
  state = { myInput: '' };

  onInputChange = (e) => {
    this.setState({ myInput: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.callMeWhenSubmitted(this.state.myInput);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="feild">
            <label> Video Search </label>
            <input
              onChange={this.onInputChange}
              type="text"
              value={this.state.myInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
