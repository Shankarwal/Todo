import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  FILTER_CLEAR_COMPLTETED,
} from "./Actions";
import rootReducer from "./TodoReducer";

export interface AddItemAction {
  type: typeof ADD_TODO;
  nextId: number;
  value: string;
}

export interface ToggleAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export interface ClearAction {
  type: typeof FILTER_CLEAR_COMPLTETED;
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  value: string;
}

export interface TodoModel {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoActionTypes =
  | AddItemAction
  | ToggleAction
  | SetFilterAction
  | ClearAction;

export type RootState = ReturnType<typeof rootReducer>;
