import React from "react";

import { IconLogo } from "./../icons/IconLogo";
import { IconCart } from "./../icons/IconCart";

import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <IconLogo />
          <h1 className={style.header__title}>Tasty Pizza</h1>
        </div>
        <button className={style.header__btn}>
          <span className={style.header__total}>$ 0</span>
          <span className={style.header__line}></span>
          <span className={style.header__cart}>
            <IconCart /> 0
          </span>
        </button>
      </div>
    </header>
  );
};
