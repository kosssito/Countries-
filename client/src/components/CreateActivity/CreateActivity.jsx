import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanActiviyFind,
  // postActivity,
  searchCountryForActivity,
} from "../../redux/actions";
import NavBar from "../Nav/NavBar";
import style from "./activity.module.css";

const CreateActivity = () => {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: 1,
    duration: 0,
    season: "spring",
    countries: [], // arry de ID que lo mando en Post
    search: "", //input busqueda
    list: [], // Lista de agregados
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (activity.search !== "")
      dispatch(searchCountryForActivity(activity.search));
    if (activity.search === "") dispatch(cleanActiviyFind());
  }, [dispatch, activity.search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //dispatch(postActivity(actividad))
  };

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };
  const activtyFind = useSelector((state) => state.activtyFind);

  const handleClick = () => {};

  return (
    <>
      <NavBar />
      <div className={style.form}>
        <h1>Create Activity</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="== Record Your Activity =="
            name="name"
            onChange={handleChange}
          />
          <select name="difficulty" onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <select name="season" onChange={handleChange}>
            <option value="spring">spring</option>
            <option value="summer">summer</option>
            <option value="autumm">autumm</option>
            <option value="winter">winter</option>
          </select>
          <input type="date" name="duration" onChange={handleChange} />
          <button>Send</button>
        </form>
        <input
          type="text"
          placeholder="= search a city and add it ="
          name="search"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>

        <ul>
          {activtyFind.map((c, i) => (
            <li key={c.name}>
              <label>{c.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CreateActivity;
