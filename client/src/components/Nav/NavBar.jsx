import { Link, useLocation } from "react-router-dom";
import style from "./navBar.module.css";
import Search from "../Search/Search";
import ico from "./icoFlag.jpg";

const NavBar = () => {
  const location = useLocation();
  
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
            <Link to="/">
          {  location.pathname ==='/'? <li className={style.active}><span>LANDING</span></li>:
          <li ><span>LANDING</span></li>
          }
            </Link>
            <Link to="/home">
            {  location.pathname ==='/home'
            ?<li className={style.active}><span>HOME</span></li>
             :<li ><span>HOME</span></li>
          }
            </Link>
            <Link to="/activity">
            {  location.pathname ==='/activity'? <li className={style.active}><span>ACTIVITY</span></li>:
          <li ><span>ACTIVITY</span></li>
          }
            </Link>
          </ul>
        </nav>
        <Search className="style.search" />
      </header>
    </>
  );
};

export default NavBar;
