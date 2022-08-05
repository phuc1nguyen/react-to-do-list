import { FaList, FaCalendarCheck, FaCalendarDay } from "react-icons/fa";

const iconSpacing = {
  marginRight: ".5rem",
};

const StatusItems = [
  {
    label: "To Do",
    status: false,
    component: <FaCalendarDay style={iconSpacing} />,
  },
  {
    label: "Done",
    status: true,
    component: <FaCalendarCheck style={iconSpacing} />,
  },
  {
    label: "All",
    status: null,
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
            className={`task-status-item ${
              props.status === item.status ? "is-active" : ""
            }`}
            data-status={item.status}
          >
            <a className="has-text-weight-bold">
              {item.component}
              <span className="is-hidden-touch">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
