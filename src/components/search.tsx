import React, { Fragment, useState } from 'react';
import { cityList, cityType } from '../App';
import style from '../App.module.css'
import Output from '../components/output';

export const exampleCity: cityType = {
  "main": {"temp": 0, "feels_like": 0},
  "name": "City Name",
}

function Searchbar() {  
  // For when user changes input
  let [input, setInput] = useState('') 

  // Changing Units
  let [switchUnit, setState] = useState(true)
  let [units, setUnit] = useState('imperial')

  // City is transferred to output
  let [city, setCity] = useState(exampleCity) 
  
  function changeUnit() {
    if(switchUnit){setUnit('imperial')}
    else{setUnit('metric')}
  }

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(input = event.target.value)
  }

  // Sumbits City and returns weather details
  function submitInput(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_API}&units=${units}`)
    .then(response => response.json())
    .then((content: cityType) => {
      setCity(city = content)
    })
  }
  
  return (
    <Fragment>
      <div>
        <form onSubmit={submitInput}>
            <label className={style.label}>Search Bar:</label>
            <input className={style.search_bar} value={input} onChange={(changeInput)} placeholder="City"></input>
            <button className={style.unit} onClick={()=> {setState(!switchUnit); changeUnit()}}>Celcius to Farheniet</button>
        </form>
      </div>

      <Output content={city}/>
    </Fragment>
    
  );
}

export default Searchbar;
