import React, { useState, useEffect } from "react";
import s from "./App.module.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popup from "./components/Popup/Popup";

const mockupTasks = [
  {
    title: "task 1",
    text: "some text for this task",
    status: 1,
    name: "Ivan",
    email: "ivan@ya.ru",
    id: "1",
  },
  {
    title: "task 2",
    text: "some text for this task",
    status: 0,
    name: "Misha",
    email: "amisha@ya.ru",
    id: "2",
  },
  // {
  //   title: "task 3",
  //   text: "some text for this task",
  //   status: 11,
  //   name: "Sasha",
  //   email: "tasha@ya.ru",
  //   id: "3",
  // },
  // {
  //   title: "task 4",
  //   text: "some text for this task",
  //   status: 10,
  //   name: "admin",
  //   email: "admin@ya.ru",
  //   id: "4",
  // },
  // {
  //   title: "task 5",
  //   text: "some text for this task",
  //   status: 0,
  //   name: "Nikolai",
  //   email: "wooden@ya.ru",
  //   id: "5",
  // },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [listTasks, setListTasks] = useState([]);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const createTask = (data, handleClear) => {
    setListTasks([...listTasks, data]);
    handleClear();
    closePopup();
  };

  const handledeleteTask = (id) => {
    setListTasks([...listTasks].filter((i) => i.id !== id));
  };

  useEffect(() => {
    setListTasks(mockupTasks);
  }, []);

  return (
    <div className={s.app}>
      <Header loggedIn={loggedIn} />
      <Main
        listTasks={listTasks}
        openPopup={openPopup}
        handledeleteTask={handledeleteTask}
      />
      <Popup isOpen={isOpen} closePopup={closePopup} createTask={createTask} />
    </div>
  );
}

export default App;
