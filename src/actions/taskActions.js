import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const { 
  title,
  editStatus, 
  description, 
  datetime, 
  priority, 
  tasks, 
  dispatch,
} = useContext(TaskContext);

export const completeTask = (task) => {
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
  
  // setTasks(newTasks);
  dispatch({
    type: "TASK_COMPLETE",
    payload: toggled,
  });
};

export const addTask = (newTask) => {
  dispatch({
    type: "TASK_CREATE",
    payload: newTask,
  });
  dispatch({ type: "FORM_RESET" });
};

export const editTask = (task) => {
  document.querySelector('.plus-btn').click();
  dispatch({
    type: "FORM_EDIT",
    payload: task,
  });

  const editTitle = task.title;
  document.getElementById('title').value = editTitle;
  document.getElementById('title-mobile').value = editTitle;
  dispatch({
    type: "FORM_SET_TITLE",
    payload: editTitle,
  });

  const editDesciption = task.description;
  document.getElementById('description').value = editDesciption;
  document.getElementById('description-mobile').value = editDesciption;
  dispatch({
    type: "FORM_SET_DESCRIPTION",
    payload: editDesciption,
  });

  const editDatetime = new Date(task.datetime);
  dispatch({
    type: "FORM_SET_DATETIME",
    payload: editDatetime,
  });

  const priorityField = document.getElementById('priority');
  const priorityFieldMobile = document.getElementById('priority-mobile');
  if (task.priority === 'high') {
    priorityField.value = 3;
    priorityFieldMobile.value = 3;
  } else if (task.priority === 'medium') {
    priorityField.value = 2;
    priorityFieldMobile.value = 2;
  } else {
    priorityField.value = 1;
    priorityFieldMobile.value = 1;
  }
  dispatch({
    type: "FORM_SET_PRIORITY",
    payload: priorityField.value,
    // it's a state so don't need the value from mobile
  });
};

export const updateTask = (task) => {
  // const newTasks = tasks.filter((item) => task.id !== item.id);
  // setTasks([task, ...newTasks]);
  dispatch({
    type: "TASK_COMPLETE",
    payload: task,
  }) 
  dispatch({ type: "FORM_RESET" });
};

export const removeTask = (task) => {
  if (confirm(`Remove ${task.title} from list?`)) {
    dispatch({
      type: "TASK_REMOVE",
      payload: task,
    })
  }
};

export const handleSubmit = (e) => {
  e.preventDefault();

  if (title.trim() === '') {
    // task title is required
    alert("Please enter task title");
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
      datetime: String(datetime),
      priority: priorityStr,
      status: false,
    };

    addTask(newTask);
  } else {
    const updatedTask = {
      id: editStatus.item.id,
      title: title,
      description: description,
      datetime: String(datetime),
      priority: priorityStr,
      status: editStatus.item.status,
    }

    updateTask(updatedTask);
  }

  clearForm();
  const modal = document.querySelector('.modal');
  if (modal.classList.contains('is-active')) {
    modal.classList.remove('is-active');
  }
};

export const clearForm = () => {
  document.querySelector('#title').value = "";
  document.querySelector('#title-mobile').value = "";
  document.querySelector('#description').value = "";
  document.querySelector('#description-mobile').value = "";
  document.querySelector('#priority').value = "0";
  document.querySelector('#priority-mobile').value = "0";
  dispatch({type: "FORM_RESET"});
};

export const clearTasks = () => {
  // remove all tasks
  if (tasks.length > 0) {
    if (confirm("Clear all tasks and can not undo?")) {
      dispatch({ type: "TASK_CLEAR" });
    }
  } else {
    alert("There is no task");
  }
};