import React, { useState } from 'react';

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // aca la  lógica para realizar una búsqueda c/ la API
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchForm;
