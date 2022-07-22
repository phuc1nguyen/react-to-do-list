import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";

export default function TaskForm() {

  return (
    <form className="my-form h-100">
      <div className="field">
        <label htmlFor="title" className="label">Title</label>
        <div className="control">
          <input type="text" id="title" name="title" className="input is-info" placeholder="Title" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="description" className="label">Description</label>
        <div className="control">
          <textarea name="description" id="description" className="textarea is-info" placeholder="More details"></textarea>
        </div>
      </div>

      <div className="field">
        <label htmlFor="datetime" className="label">Deadline</label>
        <div className="control flex space-x-2 w-full">
          <DatePicker
            defaultValue={new Date()}
            valueFormat={{ dateStyle: "medium" }}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="priority" className="label">Priority</label>
        <div className="select is-info w-100">
          <select id="priority" name="priority" className="w-100">
            <option value="0">Select Priority</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
      </div>

      <div className="form-btns control w-100 is-flex is-justify-content-space-between">
        <button type="button" className="button is-danger">CLEAR</button>
        <button type="button" className="button is-primary">CREATE</button>
      </div>
    </form>
  );
}