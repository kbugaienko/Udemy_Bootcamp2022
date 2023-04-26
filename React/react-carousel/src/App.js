import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length-1 ? 0 : current+1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length-1 : current-1);
  };

  return (
    <div className="App">
      <h2>Carousel</h2>
      <div className='slider'>
        <div className='left-arrow' onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#e66100",}} />
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
        </div>
        <div className='right-arrow' onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} size="lg " style={{color: "#e66100",}} />
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className='slide'>
                <img src={image} alt='images' />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
