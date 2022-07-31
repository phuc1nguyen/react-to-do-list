import { useContext, useEffect, useState } from "react";
import TaskForm from "../components/tasks/TaskForm";
import TaskStatusBar from "../components/tasks/TaskStatusBar";
import TaskList from "../components/tasks/TaskList";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import TaskContext from "../context/TaskContext";

export default function Home() {
  const { clearTasks } = useContext(TaskContext);
  const [taskStatus, setTaskStatus] = useState(false);
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "This is the first task",
      datetime: "Wed Jul 27 2022 21:46:37 GMT+0700 (Indochina Time)",
      priority: "high",
      status: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is the second task",
      datetime: "Wed Jul 27 2022 21:46:37 GMT+0700 (Indochina Time)",
      priority: "low",
      status: true,
    },
  ];

  const changeActiveTab = (e) => {
    // update class is-active on task status bar, remove is-active class from <ul>'s child
    const active = e.target.closest(".task-status").querySelector(".is-active");
    if (active) active.classList.remove("is-active");
    // add class is-active on clicked <li>
    const statusTab = e.target.closest(".task-status-item");
    statusTab.classList.add("is-active");
    // update state to display tasks based on which tab you choose
    // this below part (change state of TaskDisplay to choose tab then display tasks with that state) could be placed in TaskDisplay
    // but since it's related to the click event on task tabs -> lift it up here (Home.jsx)
    if (statusTab.dataset.status === "false") setTaskStatus(false);
    else if (statusTab.dataset.status === "true") setTaskStatus(true);
    else setTaskStatus(null);
    // then render items of TaskList based on the status state (true - done, false - doing, null - all tasks)
  };

  const openFormMobile = () => {
    const formMobile = document.querySelector(".my-form-mobile");
    formMobile.closest(".modal").classList.add("is-active");
    document.querySelector("html").classList.add("is-clipped");
  };

  const closeFormMobileEvent = () => {
    // close form on mobile devices
    const html = document.querySelector("html");
    const modalBg = document.querySelector(".modal-background");

    modalBg.closest(".modal").addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-background")) {
        modalBg.closest(".modal").classList.remove("is-active");
        html.classList.remove("is-clipped");
      }
    });
  };

  const removeCloseFormMobileEvent = () => {
    const html = document.querySelector("html");
    const modalBg = document.querySelector(".modal-background");

    modalBg.closest(".modal").removeEventListener("click", (e) => {
      if (e.target.classList.contains("modal-background")) {
        modalBg.closest(".modal").classList.remove("is-active");
        html.classList.remove("is-clipped");
      }
    });
  };

  const boxShadow = {
    boxShadow:
      "0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)",
  };

  const homeBtnStyle = {
    zIndex: 1,
    position: "fixed",
    bottom: "5rem",
  };

  useEffect(() => {
    // acts as DOMContentLoaded event
    closeFormMobileEvent();
    const tabs = document.querySelectorAll(".task-status-item");
    tabs.forEach((tab) => {
      tab.addEventListener("click", changeActiveTab);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    return () => {
      removeCloseFormMobileEvent();
      tabs.forEach((tab) => {
        tab.removeEventListener("click", changeActiveTab);
      });
      localStorage.clear();
    };
  }, []);

  return (
    <div className="tasks-wrapper w-100">
      <div className="columns m-0 h-100">
        <div
          className="column p-5 is-two-fifths is-hidden-touch"
          style={boxShadow}
        >
          <TaskForm />
        </div>
        <div className="column p-5">
          <TaskStatusBar status={taskStatus} />
          <TaskList status={taskStatus} />
        </div>
      </div>

      <button
        type="button"
        className="button is-primary has-text-light is-focused is-hidden-desktop"
        style={{ ...homeBtnStyle, left: "1rem" }}
        onClick={openFormMobile}
      >
        <FaPlus />
      </button>

      <button
        type="button"
        className="button is-danger has-text-light is-focused"
        style={{ ...homeBtnStyle, right: "1rem" }}
        onClick={clearTasks}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}
