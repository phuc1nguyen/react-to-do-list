import TaskList from "./TaskList";
import TaskStatusBar from "./TaskStatusBar";
import PropTypes from 'prop-types';

function TaskDisplay(props) {
  return (
    <>
      <TaskStatusBar status={props.status} />
      <TaskList status={props.status} />
    </>
  );
}

TaskDisplay.propTypes = {
  status: PropTypes.bool.isRequired,
}

export default TaskDisplay;