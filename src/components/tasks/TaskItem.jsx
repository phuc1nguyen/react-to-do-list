import { FaTrash, FaEdit, FaCalendarCheck, FaCalendarTimes } from "react-icons/fa";
import { useContext } from "react";
import TaskContext from "../../context/TaskContext";

export default function TaskItem(props) {
  const { completeTask, editTask, removeTask } = useContext(TaskContext);

  return (
    <div className="column is-one-third" style={props.style}>
      <div className="card has-background-light">
        <header className="card-header">
          <p className="card-header-title">
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