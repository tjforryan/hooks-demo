import React, { useState } from 'react';

export const useFavourites = () => {
  const [favourites, changeFavourites] = useState([]);

  const addFavourite = newFave => changeFavourites([...favourites, newFave]);
  const clearFavourites = () => changeFavourites([]);

  return {
    addFavourite,
    clearFavourites,
    favourites,
  }
}

export const FavouritesContext = React.createContext([]);
