import React from 'react';
import style from '../App.module.css'

function Searchbar() {

    function clicked(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('bruh')
    }

  return (
    <div>
        <form onSubmit={clicked}>
            <label className={style.label}>Search Bar:</label>
            <input className={style.search_bar}></input>
        </form>
    </div>
  );
}

export default Searchbar;
