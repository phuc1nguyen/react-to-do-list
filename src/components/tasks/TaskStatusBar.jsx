import { FaList, FaCalendarCheck, FaCalendarDay } from "react-icons/fa";
import PropTypes from 'prop-types';

function TaskStatusBar(props) {
  const iconSpacing = {
    marginRight: '.5rem',
  };

  return (
    <div className="tabs is-fullwidth is-boxed is-medium">
      <ul className="task-status">
        <li className={`task-status-item ${props.status === false ? 'is-active' : ''}`} data-status={false}>
          <a className="has-text-weight-bold">
            <FaCalendarDay style={iconSpacing} />
            <span className="is-hidden-touch">To Do</span>
          </a>
        </li>
        <li className={`task-status-item ${props.status === true ? 'is-active' : ''}`} data-status={true}>
          <a className="has-text-weight-bold">
            <FaCalendarCheck style={iconSpacing} />
            <span className="is-hidden-touch">Done</span>
          </a>
        </li>
        <li className={`task-status-item ${props.status === null ? 'is-active' : ''}`} data-status={null}>
          <a className="has-text-weight-bold">
            <FaList style={iconSpacing} />
            <span className="is-hidden-touch">All</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

TaskStatusBar.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default TaskStatusBar;