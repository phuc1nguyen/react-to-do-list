const TaskReducer = (state, action) => {
  switch (action.type) {
    case "FORM_SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "FORM_SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "FORM_SET_DATETIME":
      return {
        ...state,
        datetime: action.payload,
      };
    case "FORM_SET_PRIORITY":
      return {
        ...state,
        priority: action.payload,
      };
    case "FORM_EDIT":
      return {
        ...state,
        editStatus: {
          item: action.payload,
          edit: true,
        },
      };
    case "FORM_RESET":
      return {
        ...state,
        title: "",
        description: "",
        datetime: new Date(),
        priority: "0",
        editStatus: {
          item: {},
          edit: false,
        },
      };
    case "TASK_COMPLETE":
      return {
        ...state,
        tasks: [
          action.payload, 
          state.tasks.filter((item) => item.id !== action.payload.id)
        ],
      };
    case "TASK_CREATE":
      return {
        ...state,
        tasks: [
          action.payload, 
          ...state.tasks
        ],
      };
    // case "TASK_UPDATE":
    //   return {

    //   };
    case "TASK_REMOVE":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };
    case "TASK_CLEAR":
      return {
        ...state,
        tasks: [],
      };
    default:
      return state;
  };
};

export default TaskReducer;