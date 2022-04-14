import React, { useState } from "react";
import cn from "classnames";

import SVGCloseButton from "../../assets/CloseButton";

import s from "./Popup.module.scss";

const PopupSignin = ({ isOpen, closePopup, hadnleSignin }) => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };

  const { name, password } = values;

  function handleClear() {
    setValues({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    hadnleSignin(
      {
        name,
        password,
      },
      handleClear
    );
  }

  return (
    <div className={cn(s.popup, { [s.popup_opened]: isOpen === true })}>
      <div className={s.popup__container}>
        <h2 className={s.popup__title}>Войти в аккаунт</h2>
        <form className={s.popup__form} name="sigin" onSubmit={handleSubmit}>
          <input
            className={s.popup__input}
            required
            name="name"
            type="text"
            placeholder="Введите свое имя"
            onChange={handleChange}
            value={name || ""}
          />
          <input
            className={s.popup__input}
            required
            name="password"
            type="text"
            placeholder="Введите свою пароль"
            onChange={handleChange}
            value={password || ""}
          />
          <button className={s.popup__button} type="submit">
            Войти
          </button>
        </form>
        <button
          className={s.popup__closeForm}
          type="button"
          aria-label="close-form"
          onClick={closePopup}
        >
          <SVGCloseButton />
        </button>
      </div>
    </div>
  );
};

export default PopupSignin;
