import { FaTrash, FaEdit, FaCalendarCheck } from "react-icons/fa";

export default function TaskItem(props) {
  return (
    <div className="column is-one-third" style={props.style}>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {props.task.title}
          </p>
          <button className="card-header-icon py-1 px-3" aria-label="complete task">
            <span className="icon has-text-success">
              <FaCalendarCheck />
            </span>
          </button>
          <button className="card-header-icon py-1 px-3" aria-label="edit task">
            <span className="icon has-text-info">
              <FaEdit />
            </span>
          </button>
          <button className="card-header-icon py-1 px-3" aria-label="remove task">
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
        <footer className="card-footer">
          <span className="p-3">{props.task.deadline}</span>
        </footer>
      </div>
    </div>
  );
}