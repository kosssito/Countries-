import "./App.css";
import { Route, Switch } from "react-router-dom";
import {Home} from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import CountryDetail from "./components/CountryDetail/CountryDetail.jsx"
import CreateActivity from "./components/CreateActivity/CreateActivity.jsx"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:id" component={CountryDetail} />
        <Route exact path="/activity" component={CreateActivity} />
      </Switch>
    </div>
  );
}

export default App;
