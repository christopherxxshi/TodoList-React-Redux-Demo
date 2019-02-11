import { connect } from "react-redux";
import { setTodoText, addTodo } from "../actions";
import AddTodo from "../components/AddTodo";

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  setTodoText: text => dispatch(setTodoText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
