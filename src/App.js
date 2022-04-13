import React, { useState, useEffect } from "react";
import s from "./App.module.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

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
  {
    title: "task 3",
    text: "some text for this task",
    status: 11,
    name: "Sasha",
    email: "tasha@ya.ru",
    id: "3",
  },
  {
    title: "task 4",
    text: "some text for this task",
    status: 10,
    name: "Admin",
    email: "admin@ya.ru",
    id: "4",
  },
  {
    title: "task 5",
    text: "some text for this task",
    status: 0,
    name: "Nikolai",
    email: "wooden@ya.ru",
    id: "5",
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className={s.app}>
      <Header loggedIn={loggedIn} />
      <Main listTasks={mockupTasks} />
    </div>
  );
}

export default App;
