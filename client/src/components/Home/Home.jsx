import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../../components/Nav/NavBar";
import { getAllCountries } from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";
import style from "./home.module.css";

export const Home = (props) => {

  const query = props.location.search;
  let page =parseInt(query.split('=')[1]);
  if (!query) page = 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  //const countries = useSelector((state) => state.countries);
  const pages = useSelector((state) => state.pages);

  return (
    <>
      <NavBar className={style.navbar} />
      <div className={style.content}>
        <div>
          <button onClick={()=>{dispatch(getAllCountries())}}>Reset</button>
        </div>
        <div>
          <button onClick={()=>{dispatch(getAllCountries('abc'))}}>ABC</button>
          <button onClick={()=>{dispatch(getAllCountries('zyx'))}}>ZYX</button>
        </div>  
        <div>
          <button onClick={()=>{dispatch(getAllCountries('highest'))}}>HIGHEST</button>
          <button onClick={()=>{dispatch(getAllCountries('lowest'))}}>LOWEST</button>
        </div>  
            <div>
              <Link to={`/home?page=${page-1}`}>
              <button>previw</button>
              </Link>
              <Link to= {`/home?page=${page+1}`}>
              <button>next</button>
              </Link>
            </div>
        <h1>====All Countries====</h1>
        {pages[page] &&
          pages[page].map((c) => (
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
//         <p>cartas de ciudad</p>
//         <br />
//         <p>cartas de ciudad</p>
//         <br />
//         <p>cartas de ciudad</p>
//         <br />
//         <p>cartas de ciudad</p>
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
