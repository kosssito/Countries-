import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getActivity, postActivity } from "../../redux/actions";
import AddCountiesForm from "../AddCountiesForm/AddCountiesForm";
import NavBar from "../Nav/NavBar";
import style from "./activity.module.css";

const CreateActivity = () => {
  //LOCAL STATES
  const [errName, setErrName] = useState({
    name: "activity name must have more than 3 characters",
  });

  const [errDificulty, setErrDificulty] = useState({
    difficulty: "select a dificulty",
  });

  const [errSeason, setErrSeason] = useState({
    season: "select a season",
  });
  const [errStart, setErrStart] = useState({
    start: "select a start activity date",
  });

  const [errEnd, setErrEnd] = useState({
    end: "select a end activity date",
  });

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    start: 0,
    end: 0,
    season: "",
    countries: [],
  });
  
  const [countriesAdds, setCountriesAdds] = useState({
    list: [],
  });

  // Btn Disable Create
  let btnDisabled = !(
    activity.name.length &&
    activity.difficulty.length &&
    activity.start !== 0 &&
    activity.end !== 0 &&
    countriesAdds.list.length &&
    !errName.name
  );

  // USE EFFECT
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  // USE SELECTOR

  const activities = useSelector((state) => state.activities);
  const actUpper = activities.map((a) => a.name.toUpperCase());

  // === VALIDATORS ===

  const validatorName = (input) => {
    const error = {};
    if (input.length < 3)
      error.name = "activity name must have more than 3 characters";
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(input) && input !== "")
      error.name = " dont use special characters $%&/().,-_[]{}*";
    if (actUpper.includes(input.toUpperCase()))
      error.name = "activity name resgistred";
    return error;
  };
  const validatorDificulty = (input) => {
    const error = {};
    if (input === "") error.difficulty = "select a dificulty";
    return error;
  };
  const validatorSeason = (input) => {
    const error = {};
    if (input === "") error.season = "select a season";
    return error;
  };
  const validatorStart = (input) => {
    const error = {};
    if (input === "") error.start = "select a start activity date";
    return error;
  };
  const validatorEnd = (input) => {
    const error = {};
    if (input === "") error.end = "select a end activity date";
    return error;
  };

  // monitor changes in activity inputs
  const handleChange = (e) => {
    if (e.target.name === "name") setErrName(validatorName(e.target.value));
    if (e.target.name === "difficulty")
      setErrDificulty(validatorDificulty(e.target.value));
    if (e.target.name === "season")
      setErrSeason(validatorSeason(e.target.value));
    if (e.target.name === "start") setErrStart(validatorStart(e.target.value));
    if (e.target.name === "end") setErrEnd(validatorEnd(e.target.value));

    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };


  //===SUBMIT====
  const handleSubmit = (e) => {
    e.preventDefault();

    activity.countries = countriesAdds.list.map((c) => c.id);
    alert("SE CREO ACTIVIAD!!!", activity);
    dispatch(postActivity(activity));
    history.push("/home");
  };
 

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.form}>
        <h1>Create Activity</h1>

        <form>
          <div>
            <input
              type="text"
              placeholder="==  ADD a Activity =="
              name="name"
              onChange={handleChange}
              className={errName.name&& style.err}
            />
            <br />
            {errName.name && <span>{errName.name}</span>}
          </div>

          <div>
            <select name="difficulty" onChange={handleChange}
            className={errDificulty.difficulty&& style.err}>
              <option value="">difficulty</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <br />
            {errDificulty.difficulty && errDificulty.difficulty}
          </div>

          <div>
            <select name="season" onChange={handleChange} className={errSeason.season&& style.err}>
              <option value=""> = season = </option>
              <option value="spring">spring</option>
              <option value="summer">summer</option>
              <option value="autumm">autumm</option>
              <option value="winter">winter</option>
            </select>
            <br />
            {errSeason.season && errSeason.season}
          </div>

          <div>
            <input type="date" name="start" onChange={handleChange} className={errStart.start&& style.err} />
            <br />
            {errStart.start && errStart.start}
          </div>

          <div>
            <input type="date" name="end" onChange={handleChange} className={errEnd.end&& style.err} />
            <br />
            {errEnd.end && errEnd.end}
          </div>
        </form>

        <div>
          <AddCountiesForm
            setCountriesAdds={setCountriesAdds}
            countriesAdds={countriesAdds}
          />
        </div>
      <form onSubmit={handleSubmit}>
        <button disabled={btnDisabled}>Create</button>
      </form>
      </div>

    </div>
  );
};

export default CreateActivity;
