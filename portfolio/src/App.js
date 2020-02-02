import React from 'react';
import Header from './Components/Header';
import ContactCard from './Components/ContactCard';
import ImageCard from './Components/ImageCard';
import AppTitle from './Components/AppTitles';
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