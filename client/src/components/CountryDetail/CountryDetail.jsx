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
    <div className={style.body}>
      <NavBar />

      <div className={style.content}>
        <div className={style.cInfo}>
          <img src={country.flag} alt="img-country" width={200} height={100} />
          <h1>{country.name}</h1>
          <span className={style.title}>CONTINENT</span>
          <span>{country.continent}</span>
          <span className={style.title}>ID</span>
          <span>{country.id}</span>
          <span className={style.title}>AREA</span>
          <span>{country.area}</span>
          <span className={style.title}>POPULATION</span>
          <span>{country.population}</span>
          
        </div>
        <div className={style.cActivity}>
        <h2 className={style.title}>Activities:</h2>
          {country.Activities &&
            country.Activities.length !== 0 &&
            country.Activities.map((a) => (
              <ActivityCard
                key={a.name}
                name={a.name}
                start={a.start}
                difficulty={a.difficulty}
                end={a.end}
                season={a.season}
                duration={a.duration}
              />
            ))}
          <div className={style.button}>
            <br />
            <Link to="/home">
              <button>Back</button>
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
