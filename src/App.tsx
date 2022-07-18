import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import Searchbar from './components/search';

// const site = "https://gist.githubusercontent.com/ahmu83/38865147cf3727d221941a2ef8c22a77/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json"
// Link above is a list of cities, credit them once you implement the auto search

export interface cityType {
  "weather"?: [{"id": number, "main": string, "description": string}]
  "main": {"temp": number, "feels_like": number, "temp_min"?: number, "temp_max"?: number, "pressure"?: number, "humidity"?: number,}
  "wind"?: {"speed": number, "deg": number}
  "name": string
  "message"?: string
  "sys"?: {"country": string}
  
}

export let cityList: Array<cityType>
function App() {
  let [data, setData] = useState(Array<cityType>)
  
  useEffect(()=> {
    fetch("/CITYLIST_test.json")
      .then(response => response.json())
      .then((content: Array<cityType>) => {
        setData(data = content)
        cityList = data
    })
  }, [])

  return (
    <div className={style.content}>
      <header className={style.header}>Welcome to Weather App</header>
      <Searchbar/>
      

    </div>
  );
}

export default App;
