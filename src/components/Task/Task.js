import React from "react";

import s from "./Task.module.scss";

const Task = (props) => {
  return (
    <div className={s.task}>
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
