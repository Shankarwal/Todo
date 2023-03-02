import { TodoActionTypes } from "./Types";

export const ADD_TODO = "ADD_ITEM";
export const TOGGLE_TODO = "TOGGLE_ITEM";
export const FILTER_ALL = "FILTER_ALL";
export const FILTER_ACTIVE = "FILTER_ACTIVE";
export const FILTER_COMPLTETE = "FILTER_COMPLETE";
export const FILTER_CLEAR_COMPLTETED = "FILTER_CLEAR_COMPLETE";
export const SET_FILTER = "SET_FILTER";
let nextId: number = 0;

export const addItem = (value: string): TodoActionTypes => ({
  type: ADD_TODO,
  nextId: nextId++,
  value,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id,
});

export const clearCompleted = () => ({
  type: FILTER_CLEAR_COMPLTETED,
});

export const setFilter = (filter: string): TodoActionTypes => ({
  type: SET_FILTER,
  value: filter,
});
