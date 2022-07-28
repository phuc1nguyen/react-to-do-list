import { useContext } from "react";
import { FaTrash, FaEdit, FaCalendarCheck, FaCalendarTimes } from "react-icons/fa";
import TaskContext from "../../context/TaskContext";

export default function TaskItem(props) {
  const { tasks, dispatch } = useContext(TaskContext);

  const completeTask = (task) => {
    let toggled = {};
    tasks.map((item) => {
      if (item.id === task.id) {
        toggled = {
          ...item,
          status: !task.status,
        };
      }
    });
    dispatch({
      type: "TASK_UPDATE",
      payload: toggled,
    });
  };

  const editTask = (task) => {
    // Open form on mobile devices
    const formMobile = document.querySelector('.my-form-mobile');
    formMobile.closest('.modal').classList.add('is-active');
    document.querySelector('html').classList.add('is-clipped');

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
    });
  };

  const removeTask = (task) => {
    if (confirm(`Remove ${task.title} from list?`)) {
      dispatch({
        type: "TASK_REMOVE",
        payload: task,
      });
    }
  };

  return (
    <div className="column is-one-third" style={props.style}>
      <div className="card has-background-light">
        <header className="card-header">
          <p className="card-header-title" style={props.task.status === true ? {textDecoration: "line-through"} : {}}>
            {props.task.title}
          </p>
          <button className="card-header-icon py-1 px-3" aria-label="complete task" title="Complete" onClick={() => completeTask(props.task)}>
            {!props.task.status ? (
              <span className="icon has-text-success">
                <FaCalendarCheck />
              </span>
            ) : (
              <span className="icon has-text-warning">
                <FaCalendarTimes />
              </span>
            )}
          </button>
          <button className="card-header-icon py-1 px-3" aria-label="edit task" title="Edit" onClick={() => editTask(props.task)}>
            <span className="icon has-text-info">
              <FaEdit />
            </span>
          </button>
          <button className="card-header-icon py-1 px-3" aria-label="remove task" title="Remove" onClick={() => removeTask(props.task)}>
            <span className="icon has-text-danger">
              <FaTrash />
            </span>
          </button>
        </header>
        <div className="p-4">
          <div className="content">
            {props.task.description}
          </div>
        </div>
        <footer className="card-footer is-flex is-justify-content-space-between">
          <span className="p-3">{(new Date(props.task.datetime)).toLocaleString()}</span>
          <span className={`p-3 has-text-primary has-text-weight-bold 
            ${props.task.priority === 'low' ? 'has-text-primary' : ''}
            ${props.task.priority === 'medium' ? 'has-text-warning' : ''}   
            ${props.task.priority === 'high' ? 'has-text-danger' : ''}   
          `}>{props.task.priority.toUpperCase()}</span>
        </footer>
      </div>
    </div>
  );
}