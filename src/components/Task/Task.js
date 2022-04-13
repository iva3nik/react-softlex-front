import React, { useState } from "react";
import cn from "classnames";

import s from "./Task.module.scss";

const Task = (props) => {
  const [name, setName] = useState("admin");
  return (
    <div className={s.task}>
      <div className={s.task__buttons}>
        <button
          className={cn(s.task__button, {
            [s.task__buttons_type_admin]: name === "admin",
          })}
        >
          Edit task
        </button>
        <button className={s.task__button}>Delete task</button>
      </div>
      <h2 className={s.task__title}>Название задачи : {props.title}</h2>
      <p className={s.taks__text}>Текст задачи : {props.text}</p>
      <p className={s.taks__text}>Статус выполнения : {props.status}</p>
      <hr />
      <p className={s.taks__text}>Имя постановщика задачи : {props.name}</p>
      <p className={s.taks__text}>Email постановщика задачи : {props.email}</p>
    </div>
  );
};

export default Task;
