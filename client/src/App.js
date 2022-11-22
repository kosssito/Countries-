import "./App.css";
import { Route, Switch } from "react-router-dom";
import {Home} from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import CountryDetail from "./components/CountryDetail/CountryDetail.jsx"
import CreateActivity from "./components/CreateActivity/CreateActivity.jsx"
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/countries/:id" component={CountryDetail} />
        <Route exact path="/activity" component={CreateActivity} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
