import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE
} from "../actions/actionTypes";

import Immutable from "immutable";

const initialState = {
  isFecthing: false,
  error: null,
  data: []
};

const reducer = (state = Immutable.fromJS(initialState), action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return state.set("isFetching", true);
    case FETCH_TODO_SUCCESS:
      return state.merge({
        isFecthing: false,
        data: Immutable.fromJS(action.data)
      });
    case FETCH_TODO_FAILURE:
      return state.merge({
        isFecthing: false,
        error: action.error
      });
    default:
      const data = state.get("data");
      return state.set("data", todos(data, action));
  }
};

const todos = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = Immutable.fromJS({
        id: action.id,
        text: action.text,
        completed: false
      });
      return state.push(newTodo);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.get("id") === action.id
          ? todo.set("completed", !todo.get("completed"))
          : todo
      );
    default:
      return state;
  }
};
export default reducer;
