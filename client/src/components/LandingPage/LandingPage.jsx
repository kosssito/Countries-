import { Link } from "react-router-dom";
import style from "./laningPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.content}>
      <div className={style.header}>
        <h1>PI COUNTRIES</h1>
      </div>
      <div className={style.info}>
        <div className={style.dev}>
          <span>Developer</span>
          <br />
          <span>Eduardo Laredo</span>
        </div>
      
          <span>Backend with Express JS</span>
          <span>Fontend with React-Readux</span>
          <span>Data Base with Sequelize</span>
      </div>
      <div className={style.button}>
        <Link to="/home">
          <button>HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
