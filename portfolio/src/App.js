import React from 'react';
import Header from './Components/Header/Header';
import ContactCard from './Components/ContactCard/ContactCard';
import ImageCard from './Components/ImageCard/ImageCard';
import AppTitle from './Components/AppTitle/AppTitles';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactCard />
      <ImageCard />
      <AppTitle />
    </div>
  );
}

export default App;