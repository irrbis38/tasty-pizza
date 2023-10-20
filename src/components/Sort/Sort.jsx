import React from "react";

import style from "./Sort.module.scss";

export const Sort = () => {
  return (
    <div className={style.sort}>
      <button
        type="button"
        className={style.sort__btn}
        aria-label="pizza sorting"
        datatype="popular"
      >
        <span>Sort by:</span> Popularity
      </button>
      <ul className={style.sort__dropdown}>
        <li datatype="popular" aria-label="sort pizzas by popularity">
          Popularity
        </li>
        <li datatype="low" aria-label="ascending order of price">
          Low Price
        </li>
        <li datatype="high" aria-label="descending order of price">
          High Price
        </li>
      </ul>
    </div>
  );
};
