import { FaList, FaCalendarCheck, FaCalendarDay } from "react-icons/fa";

export default function TaskStatusBar() {
  const iconSpacing = {
    marginRight: '.5rem',
  };

  return (
    <div className="tabs is-fullwidth is-boxed is-medium">
      <ul className="task-status">
        <li className="task-status-item is-active">
          <a className="has-text-weight-bold">
            <FaCalendarDay style={iconSpacing} />
            <span className="is-hidden-touch">To Do</span>
          </a>
        </li>
        <li className="task-status-item">
          <a className="has-text-weight-bold">
            <FaCalendarCheck style={iconSpacing} />
            <span className="is-hidden-touch">Done</span>
          </a>
        </li>
        <li className="task-status-item">
          <a className="has-text-weight-bold">
            <FaList style={iconSpacing} />
            <span className="is-hidden-touch">All</span>
          </a>
        </li>
      </ul>
    </div>
  );
}