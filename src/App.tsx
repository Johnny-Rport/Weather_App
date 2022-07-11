import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import Searchbar from './components/search';

export interface cityType {
  coord?: {lon: number, lat: number}
  country: string
  id?: number
  name: string
  state: string
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
        console.log("Data Recorded")
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
