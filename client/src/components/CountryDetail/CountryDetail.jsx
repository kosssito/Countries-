import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryDetailId } from "../../redux/actions";
import  NavBar  from "../../components/Nav/NavBar"

const CountryDetail = ({match}) => {
  const id = match.params.id
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCountryDetailId(id))
  },[dispatch,id])

  const country = useSelector(state => state.country)

   //console.log( country);
  return (
    <>
      <NavBar />
      <img src={country.flag} alt="img-country" width={200} height={100} />
      <h1>Name: {country.name}</h1>
      <p>ID: {country.id}</p>
      <p>continent: {country.continent}</p>
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>
      <Link to='/home'>
      <button>Back</button>
      </Link>
  
       {/* <p>Activities: {country.Activities}</p> */}
      
     

    </>
  );
};

export default CountryDetail;
