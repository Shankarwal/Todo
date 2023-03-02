import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  FILTER_CLEAR_COMPLTETED,
  REMOVE_TODO,
  FILTER_SORT,
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

export interface RemoveAction {
  type: typeof REMOVE_TODO;
  id: number;
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  value: string;
}

export interface SortAction {
  type: typeof FILTER_SORT;
  value: string;
}

export interface TodoModel {
  id: number;
  text: string;
  date: string;
  completed: boolean;
}

export type TodoActionTypes =
  | AddItemAction
  | ToggleAction
  | SetFilterAction
  | ClearAction
  | RemoveAction
  | SortAction;

export type RootState = ReturnType<typeof rootReducer>;
