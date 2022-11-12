import { Link } from "react-router-dom";


const CountryCard = (props) => {
  return (
    <>
     <Link to={`/home/${props.id}`}>
      <img src={props.flag} alt="img-country" width={200} height={100} />
     </Link>
      <h1>{props.name}</h1>
      <p>{props.continent}</p>

    </>
  );
};

export default CountryCard;