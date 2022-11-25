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
  const arrPages = functionPages(filterOutPut);

  // Local State
  const [options, setOptions] = useState({
    page: 0,
    pages: [1, 2, 3, 4, 5],
    next: false,
    back: false,
  });

  // UseEfect
  useEffect(() => {
    setOptions(resetPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetPage]);

  useEffect(() => {
    // 1 page
    if (arrPages.length === 0 && options.page === 0)
      return setOptions({ ...options, back: true, next: true });
    // 2 pages
    if (arrPages.length === 2) {
      if (options.page === 0)
        return setOptions({ ...options, back: true, next: false });
      if (options.page === 1)
        return setOptions({ ...options, back: false, next: true });
    }
    // +3 pages
    // Start pages
    if (options.page === 0 && options.page !== arrPages.length - 1)
      return setOptions({ ...options, back: true, next: false });
    // Midle pages
    if (options.page !== 0 && options.page !== arrPages.length - 1)
      return setOptions({ ...options, back: false, next: false });
    // end pages
    if (options.page !== 0 && options.page === arrPages.length - 1)
      return setOptions({ ...options, back: false, next: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.page]);

  const handlePreview = () => {
    if (options.pages[0] > 1) {
      return setOptions({
        ...options,
        page: options.page - 1,
        pages: options.pages.map((e) => e - 1),
      });
    }
    if (options.page + 1 > 1) {
      return setOptions({
        ...options,
        page: options.page - 1,
      });
    }

  };

  const handleNext = () => {
    if (options.pages[4] < arrPages.length)
      return setOptions({
        ...options,
        page: options.page + 1,
        pages: options.pages.map((e) => e + 1),
      });

    if (options.page < arrPages.length - 1)
      return setOptions({
        ...options,
        page: options.page + 1,
      });
  };
  const handeClickPage = (e) => {
    setOptions({
      ...options,
      page: parseInt(e.target.textContent) - 1,
    });
  };

  return (
    <>
      <div className={style.content}>
        <div className={style.buttons}>
          {arrPages.length > 0 && (
            <button disabled={options.back} onClick={handlePreview}>
              preview
            </button>
          )}
          {options.pages &&
            options.pages.map((p, i) => {
              let cName = "";
              if (p === options.page + 1) {
                cName = style.active;
              }
              return (
                arrPages.length > i && (
                  <button key={p} className={cName} onClick={handeClickPage}>
                    {options.pages[i]}
                  </button>
                )
              );
            })}
          {arrPages.length > 0 && (
            <button disabled={options.next} onClick={handleNext}>
              next
            </button>
          )}
        </div>

        <div className={style.cards}>
          {arrPages[options.page] &&
            arrPages[options.page].map((c) => (
              <CountryCard
                key={c.id}
                id={c.id}
                flag={c.flag}
                name={c.name}
                continent={c.continent}
              />
            ))}
        </div>
        <div className={style.buttons}>
          {arrPages.length > 0 && (
            <button disabled={options.back} onClick={handlePreview}>
              preview
            </button>
          )}
          {options.pages &&
            options.pages.map((p, i) => {
              let cName = "";
              if (p === options.page + 1) {
                cName = style.active;
              }
              return (
                arrPages.length > i && (
                  <button key={p} className={cName} onClick={handeClickPage}>
                    {options.pages[i]}
                  </button>
                )
              );
            })}
          {arrPages.length > 0 && (
            <button disabled={options.next} onClick={handleNext}>
              next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Paginate;
