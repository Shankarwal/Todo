import { ADD_TODO, TOGGLE_TODO, FILTER_CLEAR_COMPLTETED } from "./Actions";
import { TodoActionTypes, TodoModel } from "./Types";

const initialState = [] as TodoModel[];

const todoReducer = (
  state: TodoModel[] = initialState,
  action: TodoActionTypes
): TodoModel[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: action.nextId, text: action.value, completed: false },
      ];

    case TOGGLE_TODO:
      return state.map((todo: TodoModel) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case FILTER_CLEAR_COMPLTETED:
      return state.filter((todo: TodoModel) => todo.completed === false);
  }
  return state;
};

export default todoReducer;
