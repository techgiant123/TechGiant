import React from 'react';
import Header from './header/header';
import videoSrc from './assets/3163534-uhd_3840_2160_30fps.mp4';
import './index.css';
import './App.css';

function App() {
  return (
    <div>
      <video poster='./assets/3163534-uhd_3840_2160_30fps.mp4' loop autoPlay muted playsInline className='h-full w-full'>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Header />
    </div>
  );
}

export default App;
