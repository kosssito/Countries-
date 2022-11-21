import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/Nav/NavBar";
import { getAllCountries } from "../../redux/actions";
import Paginate from "../Paginate/Paginate";
import style from "./home.module.css";

const functionContinetFilter = (arr, continet) => {
  if (continet === "All Continents") return arr;
  return [...arr].filter(
    (c) => c.continent === continet // 'nort america', 'afica'
  );
};

const sort = (arr, filterby) => {
  //Default
  if (filterby === "default") return arr;

  //ABC
  if (filterby === "abc")
    return [...arr].sort((a, b) => a.name.localeCompare(b.name));

  //ZYX
  if (filterby === "zyx")
    return [...arr].sort((b, a) => a.name.localeCompare(b.name));

  //pop highest
  if (filterby === "highest")
    return [...arr].sort((b, a) => a.population - b.population);

  //pop lowest
  if (filterby === "lowest")
    return [...arr].sort((a, b) => a.population - b.population);
};

export const Home = () => {
  // Local STATES
  const [fillter, setFilter] = useState({
    filterOutPut: [],
    continents: "All Continents",
    filterBy: "default",
  });

  const [options, setOptions] = useState({
    page: 0,
    pages: [1, 2, 3, 4, 5],
    next: false,
    back: true,
  });

  // USE SELECTOR
  const allCountries = useSelector((state) => state.allCountries);

  // USE EFECT
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    setFilter({
      ...fillter,
      filterOutPut: [...allCountries],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCountries]);

  // Select Contient Input
  const handleContinent = (e) => {
    setOptions({
      ...options,
      page: 0,
      pages: [1, 2, 3, 4, 5],
      next: false,
      back: true,
    });
    const filter = functionContinetFilter([...allCountries], e.target.value);
    setFilter({
      ...fillter,
      filterOutPut: sort(filter, fillter.filterBy),
      continents: e.target.value,
    });
  };

  // Select FilterBy Input
  const handleFillter = (e) => {
    const filter = functionContinetFilter(
      [...allCountries],
      fillter.continents
    );
    setFilter({
      ...fillter,
      filterOutPut: sort(filter, e.target.value),
      filterBy: e.target.value,
    });
  };

  return (
    <>
      <NavBar className={style.navbar} />
      <div className={style.content}>
        <h1 className={style.title}>{fillter.continents}</h1>
        <div className={style.select}>
          <select name="continent" onChange={handleContinent}>
            <option value="All Continents">All Continents </option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
          </select>

          <select name="sort" onChange={handleFillter}>
            <option value="default">Deault Sort</option>
            <option value="abc">ABC</option>
            <option value="zyx">ZYX</option>
            <option value="highest">HIGHEST</option>
            <option value="lowest">LOWEST</option>
          </select>
        </div>
        <div className={style.cards}>
          <Paginate filterOutPut={fillter.filterOutPut} resetPage={options} />
        </div>
      </div>
    </>
  );
};
