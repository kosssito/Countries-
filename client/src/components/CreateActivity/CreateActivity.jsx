import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getActivity, postActivity } from "../../redux/actions";
import AddCountiesForm from "../AddCountiesForm/AddCountiesForm";
import Error from "../Error/Error";
import NavBar from "../Nav/NavBar";
import style from "./activity.module.css";

const CreateActivity = () => {
  //LOCAL STATES

  const [err, setErr] = useState({
    name: "activity name must have more than 3 characters",
    difficulty: "select a dificulty",
    season: "select a season",
    start: "select a start activity date",
    end: "select a end activity date",
  });

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    start: "",
    end: "",
    season: "",
    countries: [],
  });

  const [countriesAdds, setCountriesAdds] = useState({
    list: [],
  });

  // Btn Disable Create
  let btnDisabled = !(
    countriesAdds.list.length &&
    !err.name &&
    !err.season &&
    !err.difficulty &&
    !err.start &&
    !err.end
  );

  // USE EFFECT
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  useEffect(() => {
    setErr(validator(activity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);

  // USE SELECTOR

  const activities = useSelector((state) => state.activities);
  const actUpper = activities.map((a) => a.name.toUpperCase());
  const error = useSelector((state) => state.error);

  // === VALIDATORS ===

  const validator = (activity) => {
    const error = {};
    // name
    if (activity.name.length <= 3)
      error.name = "activity name must have more than 3 characters";
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(activity.name) && activity.name !== "")
      error.name = " dont use special characters $%&/().,-_[]{}*";
    if (actUpper.includes(activity.name.toUpperCase()))
      error.name = "activity name resgistred";
    // Dificulty
    if (activity.difficulty === "") error.difficulty = "select a dificulty";
    // Season
    if (activity.season === "") error.season = "select a season";
    // Start
    if (activity.start === "") error.start = "select a start activity date";
    if (Date.now() >= Date.parse(activity.start) + 86400000 - 1)
      error.start = "You cannot enter dates before today";
    // End
    if (activity.end === "") error.end = "select a end activity date";
    if (Date.parse(activity.end) < Date.parse(activity.start))
      error.end = "You cannot enter a date before the start date";

    return error;
  };

  // monitor changes in activity inputs
  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  //===SUBMIT====
  const handleSubmit1 = (e) => {
    e.preventDefault();
  };
  
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
        <form onSubmit={handleSubmit1}>
          <div>
            <input
              type="text"
              placeholder="  ==   Activity Name   =="
              name="name"
              onChange={handleChange}
              className={err.name?style.err:style.input}
            />
            <br />
            {err.name && <span>{err.name}</span>}
          </div>

          <div>
            <select
              name="difficulty"
              onChange={handleChange}
              className={err.difficulty?style.err:style.input}
            >
              <option value="">difficulty</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <br />
            {err.difficulty && err.difficulty}
          </div>

          <div>
            <select
              name="season"
              onChange={handleChange}
              className={err.season?style.err:style.input}
            >
              <option value=""> = season = </option>
              <option value="spring">spring</option>
              <option value="summer">summer</option>
              <option value="autumm">autumm</option>
              <option value="winter">winter</option>
            </select>
            <br />
            {err.season && err.season}
          </div>

          <div>
            <input
              type="date"
              name="start"
              onChange={handleChange}
              className={err.start?style.err:style.input}
            />
            <br />
            {err.start && err.start}
          </div>

          <div>
            <input
              type="date"
              name="end"
              onChange={handleChange}
              className={err.end?style.err:style.input}
            />
            <br />
            {err.end && err.end}
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
          {error && (
            <div className={style.error}>
              <Error />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateActivity;
