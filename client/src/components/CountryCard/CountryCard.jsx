import { Link } from "react-router-dom";
import style from "./countryCard.module.css"

const CountryCard = (props) => {
  return (
    <>
    <div className={style.content}>
     <Link to={`/countries/${props.id}`}>
      <img src={props.flag} alt="img-country" width={200} height={100} />
     </Link>
      <h3>{props.name}</h3>
      <p>{props.continent}</p>
    </div>

    </>
  );
};

export default CountryCard;