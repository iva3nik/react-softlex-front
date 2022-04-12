import React from "react";
import s from "./Header.module.scss";

const Header = ({ loggedIn, nameUser = "some user which you can know" }) => {
  return (
    <header className={s.header}>
      <h2 className={s.header__logo}>Softlex</h2>
      <div className={s.header__buttons}>
        {loggedIn ? (
          <>
            <h2 className={s.header__user}>{nameUser}</h2>
            <button className={s.header__button}>Logout</button>
          </>
        ) : (
          <>
            <button className={s.header__button}>Sign in</button>
            <button className={s.header__button}>Sign up</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
