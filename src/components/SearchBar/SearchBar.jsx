import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!query) {
      alert('Please enter search value');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Search</button>

      <input
        onChange={handleInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
      />
    </form>
  );
};
