import TaskList from "./TaskList";
import TaskStatusBar from "./TaskStatusBar";

export default function TaskDisplay(props) {
  return (
    <>
      <TaskStatusBar status={props.status} />
      <TaskList status={props.status} />
    </>
  );
}