import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { cleanFind, getCountryName } from "../../redux/actions";
import style from "./search.module.css";

const Search = () => {
  const history = useHistory()
  const [input, setInput] = useState({
    country: "",
  });
  const handleClick = ()=>{
    setInput({
      ...input,
      country:'',
    })
  }
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (input.country !== "") dispatch(getCountryName(input.country));
    if (input.country === "") dispatch(cleanFind());
  }, [dispatch, input.country]);

  const find = useSelector((state) => state.find);
  
const handleSubmit =()=>{
  
  find[0]&&history.push("/countries/"+ find[0].id)
  setInput({
    ...input,
    country:''
  })
  

}
  return (
    <>
      <div className={style.boxFind}>
        <form onSubmit={handleSubmit}>

        <input
          className={style.input}
          name="country"
          type="text"
          placeholder="    Find A Country"
          onChange={handleChange}
          />
        <button className={style.lupa} type='submit' aria-label="Search" disabled={false} onClick={handleSubmit}> <svg aria-hidden='true' viewBox='0 0 20 20'>
            <path d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' />
            </svg>
            </button>
          </form>
        {input.country&&find[0] &&<div className={style.result}>
          <ul className={style.link}>
            {find.map(
              (c, i) =>
                i < 5 && (
                  <li key={c.name}>
                    <Link  to={"/countries/" + c.id}>
                      {i < 5 && (
                        <span onClick={handleClick} key={c.name}>
                          {c.name}
                        </span>
                      )}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>}
      </div>
    </>
  );
};
export default Search;
