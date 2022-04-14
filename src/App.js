import React, { useState, useEffect } from "react";
import s from "./App.module.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popup from "./components/Popup/Popup";
import PopupSignin from "./components/PopupSignin/Popup";

import * as Tasks from "./utils/TasksApi";
import * as Users from "./utils/UsersApi";

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
    name: "admin",
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
  // поставил true так как не сделал backend
  const [loggedIn, setLoggedIn] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSignin, setIsOpenSignin] = useState(false);
  const [listTasks, setListTasks] = useState([]);

  // считаю, что получил данные с сервера
  const [currentUser, setCurrentUser] = useState({
    email: "admin@ya.ru",
    name: "admin",
    access: "admin",
  });

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const openPopupSignin = () => setIsOpenSignin(true);
  const closePopupSignin = () => setIsOpenSignin(false);

  const createTask = (data, handleClear) => {
    setListTasks([...listTasks, data]);
    handleClear();
    closePopup();
  };

  const handledeleteTask = (id) => {
    setListTasks([...listTasks].filter((i) => i.id !== id));
  };

  const hadnleLogout = () => {
    setCurrentUser({});
    setLoggedIn(false);
  };

  const hadnleSignin = ({ name, password }, handleClear) => {
    // Должно быть
    // Users
    // .authorize({ email, password })
    // .then((res) => {
    //   localStorage.setItem("jwt", res.token);
    //   checkToken(res.token);
    //   history.push("/");
    // })
    // .catch((err) => {
    //   openPopupError("Что-то пошло не так! Попробуйте ещё раз.");
    //   console.log(err);
    // });

    if (name === "admin" && password === "123") {
      setCurrentUser({ email: "admin@ya.ru", name: "admin", access: "admin" });
      setLoggedIn(true);
    }
    handleClear();
    closePopupSignin();
  };

  // Должно быть так
  // useEffect(() => {
  //   if (loggedIn) {
  //     Promise.all([Tasks.getTasks(), Users.getUser()])
  //       .then(([dataTasks, dataUser]) => {
  //         setCurrentUser(dataUser);
  //         setListTasks(dataTasks);
  //         setLoggedIn(true);
  //         history.push("/");
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [loggedIn]);

  useEffect(() => {
    setListTasks(mockupTasks);
  }, []);

  return (
    <div className={s.app}>
      <Header
        loggedIn={loggedIn}
        currentUser={currentUser}
        hadnleLogout={hadnleLogout}
        openPopupSignin={openPopupSignin}
        closePopup={closePopup}
      />
      <Main
        listTasks={listTasks}
        openPopup={openPopup}
        handledeleteTask={handledeleteTask}
        currentUser={currentUser}
      />
      <Popup
        isOpen={isOpen}
        closePopup={closePopup}
        createTask={createTask}
        currentUser={currentUser}
      />
      <PopupSignin
        isOpen={isOpenSignin}
        closePopup={closePopupSignin}
        hadnleSignin={hadnleSignin}
        openPopupSignin={openPopupSignin}
      />
    </div>
  );
}

export default App;
