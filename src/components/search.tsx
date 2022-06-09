import React, { useState } from 'react';
import style from '../App.module.css'
import inform from './informHandler';

// Only Thing to add is a auto-search type function
export let input: string //Allows userInput to be exported
function Searchbar() {
  let [userInput, setInput] = useState('')

    function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
      setInput(userInput = event.target.value)
      input = userInput
    }

    function submitInput(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        inform()
    }

  return (
    <div>
        <form onSubmit={submitInput}>
            <label className={style.label}>Search Bar:</label>
            <input className={style.search_bar} value={userInput} onChange={changeInput} placeholder="City"></input>
        </form>
    </div>
  );
}

export default Searchbar;
