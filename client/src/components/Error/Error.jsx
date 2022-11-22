import { useDispatch } from "react-redux";
import { clenError, getAllCountries } from "../../redux/actions";
import style from "./error.module.css";

const Error = () => {
    const dispatch = useDispatch();


  const handleLanding = () => {
    dispatch(clenError())
    dispatch(getAllCountries())

  };

  return (
    <div className={style.content}>
      <div className={style.div}>
        <div className={style.text}>
          <div className={style.parrafo}>
            <span>Oh no!</span>
            <br />
            <span>Server down :( </span>
            <br />
            <span>We are working to fix it</span>
        
          </div>
        </div>
        <button onClick={handleLanding} className={style.button}>
          Try connect again!!
        </button>
      </div>
    </div>
  );
};

export default Error;
