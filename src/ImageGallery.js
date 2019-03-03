import React, { useContext } from 'react';

import { FavouritesContext } from './useFavourites';

const ImageGallery = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <div className="gallery">
    {
      favourites.map((imgUrl) => (
        <img key={imgUrl} src={imgUrl} alt="" />
      ))
    }
    </div>
  );
};

export default ImageGallery;