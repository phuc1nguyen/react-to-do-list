import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import { handleSubmit } from "../../actions/taskActions";

export default function TaskFormMobile() {
  const { 
    datetime,
    editStatus,
    dispatch,
  } = useContext(TaskContext);

  return (
    <div className="modal is-hidden-desktop">
      <div className="modal-background"></div>
      <div className="modal-content p-5">
        <form className="my-form-mobile" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="title-mobile" className="label">Title</label>
            <div className="control">
              <input type="text" id="title-mobile" name="title" className="input is-info" placeholder="Title" onChange={e => dispatch({type: "FORM_SET_TITLE", payload: e.target.value})} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="description-mobile" className="label">Description</label>
            <div className="control">
              <textarea name="description" id="description-mobile" className="textarea is-info" placeholder="More details" onChange={e => dispatch({type: "FORM_SET_DESCRIPTION", payload: e.target.value})} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="datetime-mobile" className="label">Deadline</label>
            <div className="control flex space-x-2 w-full">
              <DatePicker
                value={datetime}
                onChange={dateObj => dispatch({type: "FORM_SET_DATETIME", payload: dateObj})}
                includeTime
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="priority-mobile" className="label">Priority</label>
            <div className="select is-info w-100">
              <select id="priority-mobile" name="priority" className="w-100" onChange={e => dispatch({type: "FORM_SET_PRIORITY", payload: e.target.value})}>
                <option value="0">Select Priority</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
          </div>

          <div className="control w-100 is-flex is-justify-content-space-between mt-6">
            <button type="button" className="button is-danger" onClick={clearForm}>CLEAR</button>
            {!editStatus.edit ? (
              <button type="submit" className="button is-primary">CREATE</button>
            ) : (
              <button type="submit" className="button is-primary">UPDATE</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};