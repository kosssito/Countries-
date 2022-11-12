import { Link } from "react-router-dom";
import "./nav.css";
import Search from "../Search/Search";

const NavBar = () => {
  return (
    <>
      <nav >
        <ul className="menu">
          <Link to='/home'>
            <li>Home</li>
          </Link>
          <Link to='/activity'>
            <li>Activity</li>
          </Link>
          
          <Search />
          
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
