import React from "react";

import style from "./Filter.module.scss";
import { FilterItem } from "../FilterItem/FilterItem";

export const Filter = () => {
  const filters = [
    { name: "All", isActive: true },
    { name: "Meat", isActive: false },
    { name: "Vegan", isActive: false },
    { name: "Spicy", isActive: false },
    { name: "Covered", isActive: false },
  ];

  return (
    <div className={style.filter}>
      <div className="container">
        <div className={style.filter__wrapper}>
          <ul className={style.filter__list}>
            {filters.map((filter) => (
              <FilterItem key={filter.name} {...filter} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
