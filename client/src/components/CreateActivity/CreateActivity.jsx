import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  cleanActiviySearcher,
  getActivity,
  postActivity,
  searchCountryForActivity,
} from "../../redux/actions";
import NavBar from "../Nav/NavBar";
import style from "./activity.module.css";

const CreateActivity = () => {
  //LOCAL STAGES
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
  const [errAdd, setErrAdd] = useState({});

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    start: 0,
    end: 0,
    season: "",
    countries: [],
  });

  const [input, setInput] = useState({
    search: "",
    list: [],
    arr: []
  });

  // USE EFFECT
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (input.search !== "") dispatch(searchCountryForActivity(input.search));
    if (input.search === "") dispatch(cleanActiviySearcher());
  }, [dispatch, input.search]);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  

  // useEffect(() => {
  //   setErrors(
  //     validate({
  //       ...input,
  //     })
  //   );
  // }, [input]);

  // USE SELECTOR
  const activtySearcher = useSelector((state) => state.activtySearcher);
  const activities = useSelector((state) => state.activities);
  const actUpper = activities.map((a) => a.name.toUpperCase());

  useEffect(()=>{
    setErrAdd(
      validatorAdd({
        ...input
      })
    )  
  },[input])
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
  const validatorAdd = (input) => {
    const error = {};
    if(input.arr.length)
    error.add = "don't exist this country"
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

  const handleSearch = (e) => {
    //setErrAdd(validatorAdd(e.target.value));
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      arr: activtySearcher
      
    });
  };

  // CLICKS

  const handleClick = () => {
    if (activtySearcher.length !== 0) {
      if (!input.list.map((c) => c.name).includes(activtySearcher[0].name)) {
      //  setErrAdd({});
        return setInput({
          ...input,
          list: [...input.list, activtySearcher[0]],
          search: "",
        });
      }
    }
    // setErrAdd(validatorAdd(input.search));
  };

  let btnDisabled =
  !(
    activity.name.length &&
    activity.difficulty.length &&
    activity.start !== 0 &&
    activity.end !== 0 &&
    input.list.length
  ) 
 let btnDisabledAdd =!(input.search.length)

  //===SUBMIT====
  const handleSubmit = (e) => {
       e.preventDefault();

    activity.countries = input.list.map((c) => c.id);
    alert("SE CREO ACTIVIAD!!!", activity);
    dispatch(postActivity(activity));
    history.push("/home");
  };

  const handleAddCountry = () => {
    if (!input.list.map((c) => c.name).includes(activtySearcher[0].name)) {
      // setErrAdd({});
      setInput({
        ...input,
        list: [...input.list, activtySearcher[0]],
        search: "",
      });
    }
  };

  const handleDeleteCountry = (e) => {
    setInput({
      ...input,
      list: input.list.filter((c) => c.id !== e.target.name),
    });
  };

  return (
    <>
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
            />{" "}
            {errName.name && <span>{errName.name}</span>}
          </div>

          <div>
            <select name="difficulty" onChange={handleChange}>
              <option value="">difficulty</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            {errDificulty.difficulty && errDificulty.difficulty}
          </div>

          <div>
            <select name="season" onChange={handleChange}>
              <option value=""> = season = </option>
              <option value="spring">spring</option>
              <option value="summer">summer</option>
              <option value="autumm">autumm</option>
              <option value="winter">winter</option>
            </select>
            {errSeason.season && errSeason.season}
          </div>

          <div>
            <input type="date" name="start" onChange={handleChange} />
            {errStart.start && errStart.start}
          </div>

          <div>
            <input type="date" name="end" onChange={handleChange} />
            {errEnd.end && errEnd.end}
          </div>
        </form>
        <input
          type="text"
          placeholder="= search a city and add it ="
          name="search"
          onChange={handleSearch}
        />

        <button disabled={btnDisabledAdd} onClick={handleClick}>Add</button>
        <div>
          <ul>
            {activtySearcher.map(
              (c, i) =>
                i < 5 && (
                  <li key={c.name}>
                    <button onClick={handleAddCountry}>{c.name}</button>
                  </li>
                )
            )}
          </ul>
        </div>
        {errAdd.add && <p>{errAdd.add} </p>}
        <div>
          <ul>
            <p>Counties adds:</p>
            {input.list.map((c) => (
              <li key={c.name}>
                <label>{c.name}</label>
                <button name={c.id} onClick={handleDeleteCountry}>
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <form  onSubmit={handleSubmit}>
            <button disabled={btnDisabled}>Create</button>
      </form>
    </>
  );
};

export default CreateActivity;
