import { Link } from "react-router-dom";
import img from "../../countries.png"

const LandingPage = () => {
  return (
    <div>
      <h1>Countries</h1>
      <p>by</p>
      <p>Eduardo Laredo</p>
      <Link to='/home'>
      <button>Click To Home</button>
      </Link>
      <img src={img} alt="No Imagen" width={1000} height={500}/>
      <br />
    </div>
  );
};

export default LandingPage;
