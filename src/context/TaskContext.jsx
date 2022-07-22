import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

export function TaskProvider(props) {
  const initialTasks = [
    {
      id: 1,
      title: "Task 1",
      description: "This is a sample to do task",
      deadline: "Jul 22, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is a sample to do task but this particular one has significantly more text to check if the card container can scale beyond infinity",
      deadline: "Jul 21, 2022",
      priority: "medium",
      done: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 4,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 5,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 6,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 7,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 8,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 9,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 10,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    if (title === '') {
      alert('Please enter task title');
      return;
    }
    const description = document.getElementById('description').value;
    let datetime = document.getElementById('datetime').value;
    if (datetime === '') {
      datetime = (new Date()).toLocaleString();
    } 
    let priority = parseInt(document.getElementById('priority').value);
    if (priority === '3') {
      priority = 'high';
    } else if (priority === '2') {
      priority = 'medium';
    } else {
      // if user don't pick or change the value of option before submitting
      priority = 'low';
    }
  
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      deadline: datetime,  
      priority: priority,
      done: false,
    };

    setTasks([
      newTask,
      ...tasks,
    ]);
  };

  const handleChange = date => {
    // get picked date from calendar to hidden input value 
    const datetime = document.getElementById('datetime');
    datetime.value = date.toLocaleString();
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      handleSubmit,
      handleChange,
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;