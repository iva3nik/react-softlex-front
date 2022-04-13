import React, { useState } from "react";

import SVGOpenButton from "../../assets/OpenButton";
import SVGCloseButton from "../../assets/CloseButton";

import s from "./Dropdown.module.scss";

const dropdown = [
  { type: "default" },
  { type: "name" },
  { type: "email" },
  { type: "status" },
];

const Dropdown = ({ typeFilter, hadnleTypeFilter }) => {
  const [open, setOpen] = useState(false);

  const hadnleOpenForms = () => {
    setOpen(!open);
  };

  const hadnleFilter = (type) => {
    hadnleTypeFilter(type);
    setOpen(false);
  };

  const openingLine = () => (
    <>
      <div className={s.dropdown__string} onClick={hadnleOpenForms}>
        <h3 className={s.dropdown__title}>Фильтрация по - {typeFilter}</h3>
        <button className={s.dropdown__button}>
          {open ? <SVGCloseButton /> : <SVGOpenButton />}
        </button>
      </div>
    </>
  );

  return (
    <section className={s.dropdown}>
      {open ? (
        <>
          {openingLine()}
          <ul className={s.dropdown__list}>
            {dropdown.map((i, index) => (
              <li
                className={s.dropdown__point}
                key={index}
                onClick={() => hadnleFilter(i.type)}
              >
                {i.type}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>{openingLine()}</>
      )}
    </section>
  );
};

export default Dropdown;
