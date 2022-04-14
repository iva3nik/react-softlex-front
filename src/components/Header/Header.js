import React from "react";
import s from "./Header.module.scss";

const Header = ({ loggedIn, currentUser, hadnleLogout, openPopupSignin }) => {
  return (
    <header className={s.header}>
      <h2 className={s.header__logo}>Softlex</h2>
      <div className={s.header__buttons}>
        {loggedIn ? (
          <>
            <h2 className={s.header__user}>{currentUser.name}</h2>
            <button className={s.header__button} onClick={hadnleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className={s.header__button} onClick={openPopupSignin}>
              Sign in
            </button>
            <button className={s.header__button}>Sign up</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
