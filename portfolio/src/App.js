import React from 'react';
import Header from './Components/Header';
import ContactCard from './Components/ContactCard';
import ImageCard from './Components/ImageCard';
import TodoApp from './Components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactCard />
      <ImageCard />
      <TodoApp />
    </div>
  );
}

export default App;