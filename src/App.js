import React, { useState, useEffect }from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [currentImageUrl, changeImageUrl] = useState(null);

  useEffect(() => {
    axios('https://aws.random.cat/meow')
      .then(
        (response) => changeImageUrl(response.data.file)
      );
  }, []);

  return (
    <div className="App">
      <h1>What do you think of this?</h1>
      <div className="imageBox">
        {
          currentImageUrl && <img src={currentImageUrl} className="mainImage"/>
        }
      </div>
    </div>
  );
};

export default App;
