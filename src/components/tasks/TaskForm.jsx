import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import { useContext } from "react";
import TaskContext from "../../context/TaskContext";

const mobileAttr = (deviceProp, name) => {
  if (deviceProp === "mobile") return name + "-mobile";
  return name;
};

export default function TaskForm(props) {
  const { datetime, editStatus, clearForm, handleChange, handleSubmit } =
    useContext(TaskContext);

  return (
    <form
      className={props.device === "mobile" ? "my-form-mobile" : "my-form h-100"}
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label htmlFor={mobileAttr(props.device, "title")} className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            id={mobileAttr(props.device, "title")}
            name="title"
            className="input is-info"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label
          htmlFor={mobileAttr(props.device, "description")}
          className="label"
        >
          Description
        </label>
        <div className="control">
          <textarea
            name="description"
            id={mobileAttr(props.device, "description")}
            className="textarea is-info"
            placeholder="More details"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor={mobileAttr(props.device, "datetime")} className="label">
          Datetime
        </label>
        <div className="control flex space-x-2 w-full">
          <DatePicker value={datetime} onChange={handleChange} includeTime />
        </div>
      </div>

      <div className="field">
        <label htmlFor={mobileAttr(props.device, "priority")} className="label">
          Priority
        </label>
        <div className="select is-info w-100">
          <select
            id={mobileAttr(props.device, "priority")}
            name="priority"
            className="w-100"
            onChange={handleChange}
          >
            <option value="0">Select Priority</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
      </div>

      <div
        className={`${
          props.device === "mobile" ? "mt-6" : "form-btns"
        } control w-100 is-flex is-justify-content-space-between`}
      >
        <button type="button" className="button is-danger" onClick={clearForm}>
          CLEAR
        </button>
        {!editStatus.edit ? (
          <button type="submit" className="button is-primary">
            CREATE
          </button>
        ) : (
          <button type="submit" className="button is-primary">
            UPDATE
          </button>
        )}
      </div>
    </form>
  );
}
