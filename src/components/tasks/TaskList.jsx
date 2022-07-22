import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "This is a sample to do task",
      deadline: "Jul 22, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is a sample to do task but this particular one has significantly more text to check if the card container can scale beyond infinity",
      deadline: "Jul 21, 2022",
      priority: "medium",
      done: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 4,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 5,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 6,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 7,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 8,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 9,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
    {
      id: 10,
      title: "Task 4",
      description: "This is a sample to do task",
      deadline: "Jul 21, 2022",
      priority: "low",
      done: false,
    },
  ];

  return (
    <div className="columns is-variable is-2 is-flex-wrap-wrap" style={{overflowY: 'scroll', maxHeight: '40rem'}}>
      {tasks.map((task, index) => {
        const style = (index === tasks.length - 1) ? { marginBottom: '3rem' } : {};
        return (
          <TaskItem key={task.id} task={task} style={style}/>
        );
      })}
    </div>
  );
}