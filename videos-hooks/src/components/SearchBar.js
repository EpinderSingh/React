import React, { useState } from 'react';

const SearchBar = ({ callMeWhenSubmitted }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    callMeWhenSubmitted(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="feild">
          <label> Video Search </label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
