import React from "react";

import { Sort } from "../Sort/Sort";

import style from "./Panel.module.scss";

export const Panel = () => {
  return (
    <div className={style.panel}>
      <div className="container">
        <div className={style.panel__wrapper}>
          <Sort />
          <div className={style.panel__search}>search</div>
        </div>
      </div>
    </div>
  );
};
