import React from 'react';
import style from './App.module.css';
import Searchbar from './components/search';

function App() {
  return (
    <div className={style.content}>
      <header className={style.header}>Welcome to Weather App</header>
      <Searchbar/>
      

    </div>
  );
}

export default App;
