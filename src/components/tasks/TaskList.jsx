import { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
  const { tasks } = useContext(TaskContext);

  return (props.status !== null ?
    (
      <div className="columns is-variable is-2 is-flex-wrap-wrap" style={{overflowY: 'scroll', maxHeight: '40rem'}}>
        {tasks.filter(task => task.status === props.status).map((task, index) => {
          const style = (index === tasks.length - 1) ? { marginBottom: '3rem' } : {};
          return (
            <TaskItem key={task.id} task={task} style={style}/>
          );
        })}
      </div>
    ) : (
      <div className="columns is-variable is-2 is-flex-wrap-wrap" style={{overflowY: 'scroll', maxHeight: '40rem'}}>
        {tasks.map((task, index) => {
          const style = (index === tasks.length - 1) ? { marginBottom: '3rem' } : {};
          return (
            <TaskItem key={task.id} task={task} style={style}/>
          );
        })}
      </div>
    )
  );
}