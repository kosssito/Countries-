import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import Search from "../Search/Search";
import ico from "./icoFlag.jpg";

const NavBar = () => {
  return (
    <>
      <header className={`${style.header}`}>
        <div className={`${style.logo}`}>
        <Link to="/">
          <img src={ico} alt="ico img"/>
          </Link>
        </div>
        <nav>
          <ul className={`${style.links}`}>
            <Link to="/home">
              <li>HOME</li>
            </Link>
            <Link to="/activity">
              <li>ACTIVITY</li>
            </Link>
          </ul>
        </nav>
        <Search className="style.search" />
      </header>
    </>
  );
};

export default NavBar;
