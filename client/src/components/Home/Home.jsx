import React, { useEffect } from "react";
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

  const countries = useSelector((state) => state.countries);

  return (
    <>
      <NavBar className={style.navbar} />
      <div className={style.content}>
        <div>
          <button>previw</button>
          <button>next</button>
        </div>
        <h1>====All Countries====</h1>
        {countries &&
          countries.map((c) => (
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
