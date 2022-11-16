import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/Nav/NavBar";
import { getAllCountries } from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";
import style from "./home.module.css";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const pages = useSelector((state) => state.pages);

  const [options, setOptions] = useState({
    continent: "default",
    page: 0,
    pages: [1,2,3,4,5],
    next: false,
    back: false
  });
  const handleContinent = (e) => {
    setOptions({
      ...options,
      continent: e.target.value,
      page: 0,
      pages: [1,2,3,4,5]
    });
    dispatch(getAllCountries(e.target.value));
  };
  const handleFillter = (e) => {
    dispatch(getAllCountries(options.continent, e.target.value));
  };
  const handlePreview = () => {

    options.page < 1&&setOptions({...options,back:true})
   
    if (options.pages[0] > 1)
     return setOptions({
        ...options,
        page: options.page - 1,
        pages: options.pages.map(e => e-1)
      });
    if(options.page+1 > 1) 
    return setOptions({
      ...options,
      page: options.page - 1,
      next:false
    });


  };
  const handleNext = () => {
    options.page < pages.length&&setOptions({...options,next:true})
  
    
    if(options.pages[4] < pages.length)
    return setOptions({
      ...options,
      page: options.page + 1,
      pages: options.pages.map(e => e+1)
    })
    if (options.page < pages.length - 1)
      return setOptions({
        ...options,
        page: options.page + 1,
       back:false
      })
    //  return e.target.disabled = true
  };
  const handeClick = (e)=>{
    setOptions({
      ...options,
      page: parseInt(e.target.textContent)-1
    })
    console.log(e.target.textContent)
    console.log(e.target.disabled )

  
  }

  return (
    <>
      <NavBar className={style.navbar} />
      <div className={style.content}>
        <div>
          <select name="continent" onChange={handleContinent}>
            <option value="default">Normal </option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </div>
        <div>
          <select name="continent" onChange={handleFillter}>
            <option value="default">Reset </option>
            <option value="abc">ABC</option>
            <option value="zyx">ZYX</option>
            <option value="highest">HIGHEST</option>
            <option value="lowest">LOWEST</option>
          </select>
        </div>

        <div>
          {pages.length > 0&&<button disabled={options.back} onClick={handlePreview}>preview</button>}
          {pages.length > 0&&<button onClick={handeClick}>{options.pages[0]} </button>}
          {pages.length > 1&&<button onClick={handeClick}>{options.pages[1]} </button>}
          {pages.length > 2&&<button onClick={handeClick}>{options.pages[2]} </button>}
          {pages.length > 3&&<button onClick={handeClick}>{options.pages[3]} </button>}
          {pages.length > 4&&<button onClick={handeClick}>{options.pages[4]} </button>}
          {pages.length > 0&&<button disabled={options.next}onClick={handleNext}>next</button>}
        </div>
        <label>{options.page+1} actual </label>
        <h1>====All Countries====</h1>
        {pages[options.page] &&
          pages[options.page].map((c) => (
            <CountryCard
              key={c.id}
              id={c.id}
              flag={c.flag}
              name={c.name}
              continent={c.continent}
            />
          ))}

        <br />
      </div>
    </>
  );
};

// export class Home extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.getAllCountries();
//   }

//   render() {
//     return (
//       <div>
//         <NavBar />
//         <h1>{this.props.countries}</h1>
//
//         <br />
//         <p>cartas de ciudad</p>
//         <br />
//         <Link to="/">
//           <button>Go To Landing</button>
//         </Link>
//       </div>
//     );
//   }
// }
//  const mapStateToProps = (state) => {
//   return {
//     countries: state.countries,
//   };
// };
//  const mapDispatchToProps = { getAllCountries };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
