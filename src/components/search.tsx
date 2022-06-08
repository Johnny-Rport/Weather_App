import React, { useState } from 'react';
import style from '../App.module.css'

function Searchbar() {
  let [term, setTerm] = useState('')


    function userInput(event: React.ChangeEvent<HTMLInputElement>) {
      setTerm(term = event.target.value)
    }

    function clicked(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        fetch("/CITYLIST_test.json")
        .then(response => response.json()).then(data => {
          console.log(data[0].name)
        })
    }

  return (
    <div>
        <form onSubmit={clicked}>
            <label className={style.label}>Search Bar:</label>
            <input className={style.search_bar} value={term} onChange={userInput}></input>
        </form>
    </div>
  );
}

export default Searchbar;
