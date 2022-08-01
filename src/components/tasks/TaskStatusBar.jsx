import { FaList, FaCalendarCheck, FaCalendarDay } from "react-icons/fa";

const iconSpacing = {
  marginRight: ".5rem",
};

const StatusItems = [
  {
    label: "To Do",
    value: false,
    component: <FaCalendarDay style={iconSpacing} />,
  },
  {
    label: "Done",
    value: true,
    component: <FaCalendarCheck style={iconSpacing} />,
  },
  {
    label: "All",
    value: null,
    component: <FaList style={iconSpacing} />,
  },
];

export default function TaskStatusBar(props) {
  return (
    <div className="tabs is-fullwidth is-boxed is-medium">
      <ul className="task-status">
        {StatusItems.map((item) => (
          <li
            key={item.label}
            className={`task-status-item ${props.status === item.value ? "is-active" : ""}`}
            data-status={item.value}
          >
            <a className="has-text-weight-bold">
              {item.component}
              <span className="is-hidden-touch">{item.label}</span>
            </a>
          </li>
        ))}
        {/* Old Code */}
        {/* <li className={`task-status-item ${props.status === false ? 'is-active' : ''}`} data-status={false}>
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
        </li> */}
      </ul>
    </div>
  );
}
