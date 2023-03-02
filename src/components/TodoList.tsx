import TodoItem from "./TodoItem";
import {
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLTETE,
  toggleTodo,
} from "../store/Actions";
import { connect } from "react-redux";
import { TodoModel, RootState } from "../store/Types";

const mapStateToProps = (state: RootState) => {
  return {
    todoItems: getVisibleTodos(state.todoItems, state.visibilityFilter),
  };
};

const mapDispatchToProps = {
  toggleTodo,
};

const getVisibleTodos = (todos: TodoModel[], filter: string): TodoModel[] => {
  switch (filter) {
    case FILTER_ALL:
      return todos;
    case FILTER_ACTIVE:
      return todos.filter((c: TodoModel) => !c.completed);
    case FILTER_COMPLTETE:
      return todos.filter((c: TodoModel) => c.completed);
    default:
      return todos;
  }
};

const TodoList = ({
  todoItems,
  toggleTodo,
}: {
  todoItems: TodoModel[];
  toggleTodo: (id: number) => void;
}) => {
  return (
    <>
      {todoItems?.map((c: TodoModel) => (
        <TodoItem
          onToggleClick={toggleTodo}
          key={c.id}
          id={c.id}
          complete={c.completed}
          text={c.text}
        />
      ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
