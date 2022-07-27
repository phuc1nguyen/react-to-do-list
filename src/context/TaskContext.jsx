import { createContext, useReducer } from "react";
import TaskReducer from "../reducers/TaskReducer";

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
    // tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
    tasks: [
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
      }
    ],
  };
  const [state, dispatch] = useReducer(TaskReducer, initState);

  return (
    <TaskContext.Provider value={{
      ...state,
      dispatch,
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;