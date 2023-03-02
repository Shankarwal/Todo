import {
  ADD_TODO,
  TOGGLE_TODO,
  FILTER_CLEAR_COMPLTETED,
  REMOVE_TODO,
  FILTER_SORT,
} from "./Actions";
import { TodoActionTypes, TodoModel } from "./Types";

const initialState = [] as TodoModel[];

const todoReducer = (
  state: TodoModel[] = initialState,
  action: TodoActionTypes
): TodoModel[] => {
  switch (action.type) {
    case ADD_TODO:
      const newDate = new Date();
      return [
        ...state,
        {
          id: action.nextId,
          text: action.value,
          completed: false,
          date: newDate.toISOString(),
        },
      ];

    case TOGGLE_TODO:
      return state.map((todo: TodoModel) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case FILTER_CLEAR_COMPLTETED:
      return state.filter((todo: TodoModel) => todo.completed === false);
    case REMOVE_TODO:
      return state.filter((todo: TodoModel) => todo.id !== action.id);
    case FILTER_SORT:
      if (action.value === "oldest") {
        return state.sort(
          (a: TodoModel, b: TodoModel) =>
            Number(new Date(a.date)) - Number(new Date(b.date))
        );
      }
      return state.sort(
        (a: TodoModel, b: TodoModel) =>
          Number(new Date(b.date)) - Number(new Date(a.date))
      );
  }
  return state;
};

export default todoReducer;
