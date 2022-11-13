import { useState } from "react";
import NavBar from "../Nav/NavBar";
import style from "./activity.module.css"

const CreateActivity = () => {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: 1,
    duration: 0,
    season: "spring",
    countries: [],
  });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };
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
        <select name="difficulty" onChange={handleChange} >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <select name="season" onChange={handleChange} >
          <option value="spring">spring</option>
          <option value="summer">summer</option>
          <option value="autumm">autumm</option>
          <option value="winter">winter</option>
        </select>
      </form>
          </div>
    </>
  );
};

export default CreateActivity;
