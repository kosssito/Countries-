import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryDetailId, cleanCountry } from "../../redux/actions";
import NavBar from "../../components/Nav/NavBar";
import style from "./country.module.css";
import ActivityCard from "../ActivityCard/ActivityCard";

const CountryDetail = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    // CDM and CDU
    dispatch(getCountryDetailId(id));
    // componentWillUnmount
    return () => {
      dispatch(cleanCountry());
    };
  }, [dispatch, id]);
  const country = useSelector((state) => state.country);
  return (
    <>
      <NavBar />

      <div className={style.content}>
        <img src={country.flag} alt="img-country" width={200} height={100} />
        <h1>Name: {country.name}</h1>
        <p>ID: {country.id}</p>
        <p>continent: {country.continent}</p>
        <p>Area: {country.area}</p>
        <p>Population: {country.population}</p>
        <p>Activities:</p>
        {country.Activities &&
          country.Activities.length !== 0 &&
          country.Activities.map((a) => (
            <ActivityCard
              key={a.name}
              name={a.name}
              difficulty={a.difficulty}
              season={a.season}
              duration={a.duration}
            />
          ))}
        <Link to="/home">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default CountryDetail;
