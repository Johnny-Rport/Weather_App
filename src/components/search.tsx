import React, { useState } from 'react';
import style from '../App.module.css'

// type defines JSON data being retrieved
interface city {
  coord: {lon: number, lat: number}
  country: string
  id: number
  name: string
  state: string
}

function Searchbar() {
  let [input, setInput] = useState('')


    function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
      setInput(input = event.target.value)
    }

    function searchInput(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        fetch("/CITYLIST_test.json")
        .then(response => response.json()).then((data: Array<city>) => {
          data.forEach(city => {
            if(city.name === input) {
              return console.log(city.name)
            }

          })
        })
    }

  return (
    <div>
        <form onSubmit={searchInput}>
            <label className={style.label}>Search Bar:</label>
            <input className={style.search_bar} value={input} onChange={changeInput} placeholder="City"></input>
        </form>
    </div>
  );
}

export default Searchbar;
