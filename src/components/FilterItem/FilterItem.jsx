import React from "react";

import style from "./FilterItem.module.scss";

export const FilterItem = ({ name, isActive }) => {
  var filterClass = isActive
    ? `${style.filter__btn} ${style.active}`
    : style.filter__btn;

  return (
    <li className={style.filter__item}>
      <button
        className={filterClass}
        type="button"
        aria-label="Check all pizzas"
      >
        {name}
      </button>
    </li>
  );
};
