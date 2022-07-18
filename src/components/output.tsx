import { cityType } from '../App';
import style from '../App.module.css'
import { exampleCity} from './search';

interface props {
  content: cityType
}

function Output(data: props) {
  
  // This catches error if city not found, otherwise thing breaks
  if(typeof data.content.message !== 'undefined') {
    console.log('City No find')
    return(
      <div className={style.grid}>
      <p>{exampleCity.name}</p>
      <p>{exampleCity.main.temp}</p>
      <p>{exampleCity.main.feels_like}</p>

    </div>)
  }

  return (
    <div className={style.grid}>
      <p>{data.content.name}</p>
      <p>Temperature: {data.content.main.temp.toFixed(0)}°</p>
      <p>Feels Like {data.content.main.feels_like.toFixed(0)}°</p>
      <p>{data.content.weather?.[0].main}</p>
      <p>{data.content.weather?.[0].description}</p>
      <p>{data.content.sys?.country}</p>
    </div>
  );
};

export default Output;
