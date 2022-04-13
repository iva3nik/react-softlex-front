import React, { useState } from "react";
import cn from "classnames";

import SVGCloseButton from "../../assets/CloseButton";

import s from "./Popup.module.scss";

const Popup = ({ isOpen, closePopup, createTask }) => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };

  const { title, text, name, email, status } = values;

  function handleClear() {
    setValues({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    createTask(
      {
        title,
        text,
        name,
        email,
        status,
        id: Math.random(),
      },
      handleClear
    );
  }

  return (
    <div className={cn(s.popup, { [s.popup_opened]: isOpen === true })}>
      <div className={s.popup__container}>
        <h2 className={s.popup__title}>Создать задачу</h2>
        <form
          className={s.popup__form}
          name="create-task"
          onSubmit={handleSubmit}
        >
          <input
            className={s.popup__input}
            required
            name="title"
            type="text"
            placeholder="Введите название задачи"
            onChange={handleChange}
            value={title || ""}
          />
          <input
            className={s.popup__input}
            required
            name="text"
            type="text"
            placeholder="Введите условие задачи"
            onChange={handleChange}
            value={text || ""}
          />
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
            name="email"
            type="email"
            placeholder="Введите свою почту"
            onChange={handleChange}
            value={email || ""}
          />
          <input
            className={s.popup__input}
            required
            name="status"
            type="number"
            placeholder="Введите статус задачи : 0, 1, 10 или 11"
            onChange={handleChange}
            value={status || ""}
          />
          <button className={s.popup__button} type="submit">
            Создать
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

export default Popup;
