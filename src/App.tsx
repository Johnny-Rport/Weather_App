import React from 'react';
import style from './App.module.css';
import Searchbar from './components/search';
import Output from './components/output';

function App() {
  return (
    <div className={style.content}>
      <header className={style.header}>Welcome to Weather App</header>
      <Searchbar/>
      <Output/>

    </div>
  );
}

export default App;
