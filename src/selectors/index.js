import { createSelector } from "reselect";
export const getText = state => state.get("text");
export const getFilter = state => state.get("filter");

const getTodos = state => state.getIn(["todos", "data"]);

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter(t => t.get("completed"));
      case "active":
        return todos.filter(t => !t.get("completed"));
      default:
        return new Error("Unknown filter: " + filter);
    }
  }
);

