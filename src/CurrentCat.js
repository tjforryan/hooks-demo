import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { FavouritesContext } from './useFavourites';

const CurrentCat = () => {
  const [currentImageUrl, changeImageUrl] = useState(null);
  const { addFavourite } = useContext(FavouritesContext);

  const getNewImage = () => {
    axios('https://aws.random.cat/meow')
      .then(
        (response) => changeImageUrl(response.data.file)
      );
  }

  const likeImage = () => {
    addFavourite(currentImageUrl);
    getNewImage();
  }

  useEffect(() => {
    getNewImage();
  }, []);

  return (
    <div className="mainImageBox">
      <div className="imageContainer">
        {
          currentImageUrl && <img alt="cat" src={currentImageUrl} className="mainImage"/>
        }
      </div>
      <div>
        <button onClick={likeImage}>I love it!</button>
        <button onClick={getNewImage}>Next!</button>
      </div>
    </div>
  );
};

export default CurrentCat;
