import React, { Fragment, useState } from 'react';
import { cityList, cityType } from '../App';
import style from '../App.module.css'
import Output from '../components/output';


// Only Thing to add is a auto-search type function
export const exampleCity: cityType = {
  country: 'US',
  state: 'US State',
  name: 'Name of City',
  coord: {lat: 0, lon: 0}
}

function Searchbar() {  
  let [input, setInput] = useState('') // For when user changes input
  let [city, setCity] = useState(exampleCity) // City is transferred to output
  
  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(input = event.target.value)
  }

  function submitInput(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    let content = cityList.find(city => {
      return city.name!.toLowerCase() === input.toLowerCase()
    })
    setCity(city = content!) 
  }
  return (
    <Fragment>
      <div>
        <form onSubmit={submitInput}>
            <label className={style.label}>Search Bar:</label>
            <input className={style.search_bar} value={input} onChange={changeInput} placeholder="City"></input>
        </form>
      </div>

      <Output content={city}/>
    </Fragment>
    
  );
}

export default Searchbar;
