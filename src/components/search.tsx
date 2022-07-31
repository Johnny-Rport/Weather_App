import React, { Fragment, useState } from 'react';
import { cityType, cityList } from '../App';
import style from '../App.module.css'
import Output from '../components/output';

export const exampleCity: cityType = {
  "main": {"temp": 0, "feels_like": 0},
  "name": "City Name",
}

let userInput: string

function Searchbar() {  
  // For when user changes input
  let [input, setInput] = useState('') 

  // Changing Units
  let [switchUnit, setState] = useState(false)
  let [type, setType] = useState('F°')
  let [units, setUnit] = useState('imperial')

  // City is transferred to output
  let [city, setCity] = useState(exampleCity) 
  
  function changeUnit() {
    setState(!switchUnit)
    if(switchUnit){setUnit('imperial'); setType('F°')}
    else{setUnit('metric'); setType('C°')}
  }
  
  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(input = event.target.value)
    userInput = input

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
            <input className={style.search_bar} value={input} onChange={changeInput} placeholder="City"></input>
            <button className={style.units} onMouseDown={changeUnit}>{type}</button>
        </form>
      </div>
      <Autosearch/>
      <Output content={city}/>
    </Fragment>
    
  );
}

function Autosearch() { 
  let AC: Array<string> = [] //Array City
  let AS: Array<string> = [] //Array State

   // Converts Dictionary into arrays for display
    function searchF() {
      AC = []
      AS = []
      cityList.forEach((value, state) => {
        value.forEach((city: string) => {
          if(city.startsWith(userInput)) {
            AC.push(city)
            AS.push(state)
          }
        });
      })

      if(userInput !== '') {
        return(
          <Fragment>
            {AC.map((city, i)=> (
            <li key={i}>{city}, {AS[i]}</li>
          ))}
          </Fragment>
        )  
      }     
    }      
      
    
  return (
    <div>{searchF()}      
    </div>    
  );
}



export default Searchbar;
