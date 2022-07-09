
import style from '../App.module.css'
import { props} from './search';

function Output(data: props) {  
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
