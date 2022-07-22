import TaskList from "./TaskList";
import TaskStatusBar from "./TaskStatusBar";

export default function TaskDisplay() {
  return (
    <>
      <TaskStatusBar />
      <TaskList />
    </>
  );
}