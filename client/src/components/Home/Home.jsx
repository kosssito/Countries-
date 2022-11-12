import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../../components/Nav/NavBar";
import { getAllCountries } from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";

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


export const Home = () => {
  const countries = useSelector((state)=> state.countries);
   console.log(countries)
  const dispatch = useDispatch();
  

  return (
    <div>
      <NavBar />
      <button onClick={()=>{dispatch(getAllCountries())}}>Cargar DATA</button>
      {
      countries.data &&  countries.data.map(c=>
        (  <CountryCard 
            key={c.name}
            flag={c.flag}
            name={c.name}
            continent={c.continent}
          />)
        )
      }

      <h1>Home</h1>
      <br />
      <Link to="/">
        <button>Go To Landing</button>
      </Link>
    </div>
  );
};

