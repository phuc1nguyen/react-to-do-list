import { createContext, useReducer } from "react";
import TaskReducer from "../reducers/TaskReducer";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export function TaskProvider(props) {
  const initState = {
    title: "",
    description: "",
    datetime: new Date(),
    priority: "0",
    editStatus: {
      item: {},
      edit: false,
    },
    tasks: localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [
          {
            id: "1",
            title: "Task 1",
            description: "this is the first task",
            datetime: new Date(),
            priority: "medium",
            status: false,
          },
          {
            id: "2",
            title: "Task 2",
            description: "this is the second task",
            datetime: new Date(),
            priority: "high",
            status: true,
          },
        ],
  };
  const [state, dispatch] = useReducer(TaskReducer, initState);

  const createTask = (newTask) => {
    dispatch({
      type: "TASK_CREATE",
      payload: newTask,
    });
    dispatch({ type: "FORM_RESET" });
  };

  const updateTask = (updatedTask) => {
    dispatch({
      type: "TASK_UPDATE",
      payload: updatedTask,
    });
    dispatch({ type: "FORM_RESET" });
  };

  const clearForm = () => {
    // reset form fields and states
    document.querySelector("#title").value = "";
    document.querySelector("#title-mobile").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#description-mobile").value = "";
    document.querySelector("#priority").value = "0";
    document.querySelector("#priority-mobile").value = "0";
    dispatch({ type: "FORM_RESET" });
  };

  const clearTasks = () => {
    // remove all tasks
    if (state.tasks.length > 0) {
      if (confirm("Clear all tasks and can not undo?")) {
        dispatch({ type: "TASK_CLEAR" });
      }
    } else {
      alert("There is no task");
    }
  };

  const handleChange = (e) => {
    // handle form's fields change events
    if (e.target === undefined) {
      // <DatePicker /> returns e as a JS Date object
      dispatch({
        type: "FORM_SET_DATETIME",
        payload: e,
      });
    } else {
      dispatch({
        type: `FORM_SET_${e.target.name.toUpperCase()}`,
        payload: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.title.trim() === "") {
      // task title is required
      alert("Please enter task title");
      return;
    }

    let priorityStr = "";
    if (state.priority === "3") {
      priorityStr = "high";
    } else if (state.priority === "2") {
      priorityStr = "medium";
    } else {
      priorityStr = "low";
    }

    if (!state.editStatus.edit) {
      const newTask = {
        id: uuidv4(),
        title: state.title,
        description: state.description,
        datetime: String(state.datetime),
        priority: priorityStr,
        status: false,
      };
      createTask(newTask);
    } else {
      const updatedTask = {
        id: state.editStatus.item.id,
        title: state.title,
        description: state.description,
        datetime: String(state.datetime),

        priority: priorityStr,
        status: state.editStatus.item.status,
      };
      updateTask(updatedTask);
    }

    clearForm();
    // close form on mobile devices
    const modal = document.querySelector(".modal");
    if (modal.classList.contains("is-active")) {
      modal.classList.remove("is-active");
    }
    const html = document.querySelector("html");
    if (html.classList.contains("is-clipped")) {
      html.classList.remove("is-clipped");
    }
  };

  return (
    <TaskContext.Provider
      value={{
        ...state,
        handleChange,
        clearForm,
        clearTasks,
        handleSubmit,
        dispatch,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
