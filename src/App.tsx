import { useEffect } from 'react';
import style from './App.module.css';
import Searchbar from './components/search';

const site = "https://gist.githubusercontent.com/ahmu83/38865147cf3727d221941a2ef8c22a77/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json"
// Link above is a list of cities, credit them once you implement the auto search

export interface cityType {
  "weather"?: [{"id": number, "main": string, "description": string}]
  "main": {"temp": number, "feels_like": number, "temp_min"?: number, "temp_max"?: number, "pressure"?: number, "humidity"?: number,}
  "wind"?: {"speed": number, "deg": number}
  "name": string
  "message"?: string
  "sys"?: {"country": string}
  
}

export let cityList = new Map()

function App() {
  
  useEffect(()=> {
    fetch(site)
    .then(response => response.json())
    .then((content: Object) => {
      // Saves Response into ieratable Dictionary
      for(const [state, city] of Object.entries(content)) {
        cityList.set(state, city)
      }
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
