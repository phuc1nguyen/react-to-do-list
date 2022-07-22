export default function TaskStatusTab(props) {
  return (
    <li className="task-status-item">
      <a className="has-text-weight-bold">
        {props.children}
        <span className="is-hidden-touch">{props.name}</span>
      </a>
    </li>
  );
}