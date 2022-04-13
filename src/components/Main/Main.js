import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Task from "../Task/Task";

import s from "./Main.module.scss";

const Main = ({ listTasks, openPopup, handledeleteTask }) => {
  const [filteredList, setFilteredList] = useState([]);
  const [typeFilter, setTypeFilter] = useState("default");

  const filterByStatus = () => {
    setFilteredList([...filteredList].sort((a, b) => a.status - b.status));
  };

  const filterByString = () => {
    setFilteredList(
      [...filteredList].sort((a, b) => {
        if (a[typeFilter].toLowerCase() < b[typeFilter].toLowerCase()) {
          return -1;
        }
        if (a[typeFilter].toLowerCase() > b[typeFilter].toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
  };

  useEffect(() => {
    setTypeFilter("default");
    handleFilterOfList();
    setFilteredList(listTasks);
  }, [listTasks]);

  const handleFilterOfList = () => {
    if (typeFilter === "status") {
      filterByStatus();
    } else if (typeFilter === "email" || typeFilter === "name") {
      filterByString();
    } else {
      setFilteredList(listTasks);
    }
  };

  const hadnleTypeFilter = (type) => {
    setTypeFilter(type);
  };

  const deleteTask = (id) => {
    handledeleteTask(id);
  };

  useEffect(() => {
    handleFilterOfList();
  }, [typeFilter]);

  return (
    <div className={s.main}>
      <h2 className={s.main__title}>Список задач</h2>
      <button className={s.main__button} onClick={openPopup}>
        Добавить задачу
      </button>
      <Dropdown typeFilter={typeFilter} hadnleTypeFilter={hadnleTypeFilter} />
      {filteredList.length &&
        filteredList.map((task, index) => {
          return (
            <div className={s.main__task} key={index}>
              <Task
                text={task.text}
                title={task.title}
                email={task.email}
                name={task.name}
                status={task.status}
                id={task.id}
                handledeleteTask={deleteTask}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Main;
