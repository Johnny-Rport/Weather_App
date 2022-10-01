import { cityType } from '../App';
import style from '../App.module.css'
import { exampleCity} from './search';
import {icon, choose_icon} from '../images/images'

interface props {
  content: cityType
}

export let iconCode: string
// TODO Insert weather symbols, improve overall design next
function Output(data: props) {
  
  // This catches error if city not found, otherwise thing breaks
  if(typeof data.content.message !== 'undefined') {
    console.log('City No find')
    return(
    <div className={style.grid}>
      <p>{exampleCity.name}</p>
      <p>Temperature: {exampleCity.main.temp}°</p>
      <p>Feels Like {exampleCity.main.feels_like}°</p>
    </div>)
  }

  iconCode = data.content.weather?.[0].icon.slice(0, -1)!
  choose_icon()

  return (
    <div className={style.grid}>
      <p>{data.content.name}</p>
      <p>{data.content.sys?.country}</p>
      <p>Temperature: {data.content.main.temp.toFixed(0)}°</p>
      <p>Feels Like {data.content.main.feels_like.toFixed(0)}°</p>
      <p>{data.content.weather?.[0].main}</p>
      <p><img src={icon} alt={iconCode}/></p>
    </div>
  );
};
export default Output;
