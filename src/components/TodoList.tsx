import TodoItem from "./TodoItem";
import {
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLTETE,
  toggleTodo,
  removeTodo,
  setSort,
  setFilter,
} from "../store/Actions";
import { TodoActionTypes } from "../store/Types";
import { connect } from "react-redux";
import { TodoModel, RootState } from "../store/Types";
import React, { useState } from "react";

const mapStateToProps = (state: RootState) => {
  return {
    todoItems: getVisibleTodos(state.todoItems, state.visibilityFilter),
  };
};

const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
  setSort,
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
  removeTodo,
  setSort,
}: {
  todoItems: TodoModel[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  setSort: (sort: string) => TodoActionTypes;
}) => {
  const [sorted, setSorted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement> & { target: HTMLSelectElement }
  ) => {
    setSorted((prevState) => !prevState);
    setSort(e.target.value);
  };

  return (
    <>
      <label>
        Sort by
        <select id="sort" onChange={handleChange} className="sort">
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </label>
      {todoItems.map((c: TodoModel) => (
        <TodoItem
          onToggleClick={toggleTodo}
          removeTodo={removeTodo}
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
