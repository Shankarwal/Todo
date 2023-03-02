import { FILTER_ALL, SET_FILTER } from "./Actions";
import { TodoActionTypes } from "./Types";

const visibilityFilter = (
  state: string = FILTER_ALL,
  action: TodoActionTypes
): string => {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
  }
  return state;
};

export default visibilityFilter;
