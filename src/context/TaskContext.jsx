import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

export function TaskProvider(props) {
  const initialTasks = [
    {
      id: 1,
      title: "Task 1",
      description: "This is a sample to do task",
      deadline: "Sat Jul 23 2022 12:44:03 GMT+0700 (Indochina Time)",
      priority: "low",
      status: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is a sample to do task but this particular one has significantly more text to check if the card container can scale beyond infinity",
      deadline: "Sat Jul 23 2022 12:44:03 GMT+0700 (Indochina Time)",
      priority: "medium",
      status: true,
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is a sample to do task",
      deadline: "Sat Jul 23 2022 12:44:03 GMT+0700 (Indochina Time)",
      priority: "low",
      status: false,
    },
    {
      id: 4,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Sat Jul 23 2022 12:44:03 GMT+0700 (Indochina Time)",
      priority: "low",
      status: false,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [priority, setPriority] = useState(0);
  const [editStatus, setEditStatus] = useState({
    item: {},
    edit: false,
  });

  const handleTitleChange = (e) => {
    setTitle(e.target.value); 
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (dateObj) => {
    setDate(dateObj);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const completeTask = (task) => {
    // task.status = !task.status;
    // setTasks([task, ...tasks.filter(item => item.id !== task.id)]);
    // ---> this way modify the original list by changing one task's status
    let toggled = {};
    let newTasks = tasks.map((item) => {
      if (item.id === task.id) {
        toggled = {
          ...item,
          status: !task.status,
        };
        return toggled;
      } else {
        return item;
      }
    }).filter((item) => item.id !== task.id);
    // add newly updated task as the first item of the list
    newTasks = [toggled, ...newTasks];
    
    setTasks(newTasks);
  };

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const editTask = (task) => {
    setEditStatus({
      item: task,
      edit: true,
    });

    const editTitle = document.getElementById('title').value = task.title;
    setTitle(editTitle);

    const editDes = document.getElementById('description').value = task.description;
    setDescription(editDes);

    setDate(new Date(task.deadline));

    const priorityField = document.getElementById('priority');
    if (task.priority === 'high') {
      priorityField.value = 3;
    } else if (task.priority === 'medium') {
      priorityField.value = 2;
    } else {
      priorityField.value = 1;
    }
    setPriority(priorityField.value);
  };

  const updateTask = (task) => {
    const newTasks = tasks.filter((item) => task.id !== item.id);

    setTasks([task, ...newTasks]);
    setEditStatus({item: {}, edit: false});
  };

  const removeTask = (task) => {
    if (confirm(`Remove ${task.title} from list?`)) {
      setTasks(tasks.filter(item => item.id !== task.id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      // task title is required
      alert('Please enter task title');
      return;
    }

    let priorityStr = '';
    if (priority === '3') {
      priorityStr = 'high';
    } else if (priority === '2') {
      priorityStr = 'medium';
    } else {
      priorityStr = 'low';
    }

    if (!editStatus.edit) {
      const newTask = {
        id: uuidv4(),
        title: title,
        description: description,
        deadline: String(date),
        priority: priorityStr,
        status: false,
      };

      addTask(newTask);
    } else {
      const updatedTask = {
        id: editStatus.item.id,
        title: title,
        description: description,
        deadline: String(date),
        priority: priorityStr,
        status: editStatus.item.status,
      }

      updateTask(updatedTask);
    }

    clearForm();
  };

  const clearForm = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#description').value = '';
    setDate(new Date());
    document.querySelector('#priority').value = '0';
  };

  const clearTasks = () => {
    // remove all tasks
    if (tasks.length > 0) {
      if (confirm('Clear all tasks and can not undo?')) {
        setTasks([]);
      }
    } else {
      alert('There is no task');
    }
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      date,
      editStatus,
      handleTitleChange,
      handleDescriptionChange,
      handlePriorityChange,
      handleDateChange,
      completeTask,
      editTask,
      removeTask,
      handleSubmit,
      clearForm,
      clearTasks,
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;