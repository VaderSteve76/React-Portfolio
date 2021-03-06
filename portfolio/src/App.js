import React from 'react';
import Header from './Components/Header/Header';
import ContactCard from './Components/ContactCard/ContactCard';
import ImageCard from './Components/ImageCard/ImageCard';
import AppTitle from './Components/AppTitle/AppTitles';
import AppContainer from './Components/AppContainer/AppContainer';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactCard />
      <ImageCard />
      <AppTitle />
      <AppContainer />
      <Footer />
    </div>
  );
}

export default App;