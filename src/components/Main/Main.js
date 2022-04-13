import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Task from "../Task/Task";

import s from "./Main.module.scss";

const Main = ({ listTasks }) => {
  const [filteredList, setFilteredList] = useState(listTasks);
  const [typeFilter, setTypeFilter] = useState("default");

  const handleFilterOfList = () => {
    if (typeFilter === "status") {
      setFilteredList([...filteredList].sort((a, b) => a.status - b.status));
    } else if (typeFilter === "email" || typeFilter === "name") {
      setFilteredList(
        [...filteredList].sort((a, b) => {
          if (a[typeFilter] < b[typeFilter]) {
            return -1;
          }
          if (a[typeFilter] > b[typeFilter]) {
            return 1;
          }
          return 0;
        })
      );
    } else {
      setFilteredList(listTasks);
    }
  };

  const hadnleTypeFilter = (type) => {
    setTypeFilter(type);
  };

  const handledeleteTask = (id) => {
    setFilteredList([...filteredList].filter((i) => i.id !== id));
  };

  useEffect(() => {
    handleFilterOfList();
  }, [typeFilter]);

  return (
    <div className={s.main}>
      <h2 className={s.main__title}>List of tasks</h2>
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
                handledeleteTask={handledeleteTask}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Main;
