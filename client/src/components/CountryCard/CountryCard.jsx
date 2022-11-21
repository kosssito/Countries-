import { Link } from "react-router-dom";
import style from "./countryCard.module.css"

const CountryCard = (props) => {
  return (
    <>
    <div className={style.content}>
     <Link to={`/countries/${props.id}`}>
      <img src={props.flag} alt="img-country" />
     </Link>
      <h2>{props.name}</h2>
      <p>{props.continent}</p>
    </div>

    </>
  );
};

export default CountryCard;