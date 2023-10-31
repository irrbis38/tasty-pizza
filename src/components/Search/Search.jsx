import React from "react";

import { IconSearch } from "./../icons/IconSearch";

import style from "./Search.module.scss";

export const Search = () => (
  <label className={style.search}>
    <IconSearch />
    <input className={style.search__input} type="text" />
  </label>
);
