import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import style from "./paginate.module.css";

const functionPages = (arr) => {
  //                     0             1
  //ArrPages =  [ [c1,c2,c3...c9],[c10,c11... c19] ,    ]
  const ArrPages = [];
  let aux = [];
  const fistTeen = [...arr].splice(0, 9);
  ArrPages.push(fistTeen);
  const rest = [...arr].splice(9, arr.length - 1);

  rest.forEach((c, i) => {
    aux.push(c);
    if ((i + 1) % 10 === 0) {
      ArrPages.push(aux);
      aux = [];
    }
    if (rest.length - 1 === i) ArrPages.push(aux);
  });
  return ArrPages;
};

const Paginate = ({ filterOutPut, resetPage }) => {
  useEffect(() => {
    setOptions(resetPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetPage]);

  const pages = functionPages(filterOutPut);
  const [options, setOptions] = useState({
    page: 0,
    pages: [1, 2, 3, 4, 5],
    next: false,
    back: true,
  });

  const handlePreview = () => {
    options.page < 1 && setOptions({ ...options, back: true });

    if (options.pages[0] > 1) {
      return setOptions({
        ...options,
        page: options.page - 1,
        pages: options.pages.map((e) => e - 1),
        next: false,
      });
      // options.page < 1&&setOptions({...options,back:true})
    }

    if (options.page + 1 > 1) {
      return setOptions({
        ...options,
        page: options.page - 1,
        next: false,
      });
      // return  options.page < 1&&setOptions({...options,back:true})
    }
  };

  const handleNext = () => {
    options.page < pages.length && setOptions({ ...options, next: true });

    if (options.pages[4] < pages.length)
      return setOptions({
        ...options,
        page: options.page + 1,
        pages: options.pages.map((e) => e + 1),
        back: false,
      });
    if (options.page < pages.length - 1)
      return setOptions({
        ...options,
        page: options.page + 1,
        back: false,
      });
  };
  const handeClick = (e) => {
    setOptions({
      ...options,
      page: parseInt(e.target.textContent) - 1,
    });
  };

  return (
    <>
      <div className={style.content}>
          <h1 className={style.title}>====All Countries====</h1>
        <div className={style.buttons}>
          {pages.length > 0 && (
            <button disabled={options.back} onClick={handlePreview}>
              preview
            </button>
          )}
          {pages.length > 0 && (
            <button onClick={handeClick}>{options.pages[0]} </button>
          )}
          {pages.length > 1 && (
            <button onClick={handeClick}>{options.pages[1]} </button>
          )}
          {pages.length > 2 && (
            <button onClick={handeClick}>{options.pages[2]} </button>
          )}
          {pages.length > 3 && (
            <button onClick={handeClick}>{options.pages[3]} </button>
          )}
          {pages.length > 4 && (
            <button onClick={handeClick}>{options.pages[4]} </button>
          )}
          {pages.length > 0 && (
            <button disabled={options.next} onClick={handleNext}>
              next
            </button>
          )}
          <br />
        <label>{options.page + 1} actual </label>
        </div>

        <div className={style.cards}>
          {pages[options.page] &&
            pages[options.page].map((c) => (
              <CountryCard
                key={c.id}
                id={c.id}
                flag={c.flag}
                name={c.name}
                continent={c.continent}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Paginate;
