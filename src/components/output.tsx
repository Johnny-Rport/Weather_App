import style from '../App.module.css'
import { cityType, exampleCity} from './search';

interface props {
  content: cityType
}

function Output(data: props) {
  if(typeof data.content === 'undefined') {
    console.log('City No exist')
    return(
      <div className={style.grid}>
      <p>{exampleCity.country}</p>
      <p>{exampleCity.state}</p>
      <p>{exampleCity.name}</p>
      <p>{exampleCity.id}</p>
      <p>{exampleCity.coord?.lat}, {exampleCity.coord?.lon}</p>
    </div>)
  }
  

  return (
    <div className={style.grid}>
      <p>{data.content.country}</p>
      <p>{data.content.state}</p>
      <p>{data.content.name}</p>
      <p>{data.content.id}</p>
      <p>{data.content.coord?.lat}, {data.content.coord?.lon}</p>
    </div>
  );
};

export default Output;
