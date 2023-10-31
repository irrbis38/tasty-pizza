import React from "react";

import { Sort } from "../Sort/Sort";
import { Search } from "../Search/Search";

import style from "./Panel.module.scss";

export const Panel = () => {
  return (
    <div className={style.panel}>
      <div className="container">
        <div className={style.panel__wrapper}>
          <Sort />
          <Search />
        </div>
      </div>
    </div>
  );
};
