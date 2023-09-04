import React, { useState } from 'react';

function ContentGroup({ title, items }) {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleDescription = (itemId) => {
    // Implementa la lógica para mostrar/ocultar la descripción de un elemento.
  };

  const addToFavorites = (itemId) => {
    // Implementa la lógica para agregar/quitar un elemento de favoritos.
  };

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.poster} alt={item.title} />
            <h3>{item.title}</h3>
            {expandedItems.includes(item.id) ? (
              <div>
                <p>{item.description}</p>
                <button onClick={() => toggleDescription(item.id)}>Ocultar</button>
              </div>
            ) : (
              <button onClick={() => toggleDescription(item.id)}>Ver más</button>
            )}
            <button onClick={() => addToFavorites(item.id)}>Agregar a Favoritos</button>
            <a href={`/detail/${item.id}`}>Ir a Detalle</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentGroup;
