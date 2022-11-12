import { Link } from "react-router-dom";
import img from "../../countries.png"

const LandingPage = () => {
  return (
    <div>
      <h1>Henry Countries</h1>
      <img src={img} alt="No Imagen" width={1000} height={500}/>
      <br />
      <Link to='/home'>
      <button>Click To Home</button>
      </Link>
    </div>
  );
};

export default LandingPage;
