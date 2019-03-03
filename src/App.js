import React from 'react';

import CurrentCat from './CurrentCat';
import { FavouritesContext, useFavourites } from './useFavourites';
import './App.css';
import ImageGallery from './ImageGallery';

const App = () => {
  return (
    <div className="App">
    <FavouritesContext.Provider value={useFavourites()}>
      <CurrentCat />
      <ImageGallery />
    </FavouritesContext.Provider>  
    </div>
  );
};

export default App;
