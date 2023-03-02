import {
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLTETE,
  setFilter,
  clearCompleted,
} from "../store/Actions";

import { connect } from "react-redux";
import { TodoActionTypes } from "../store/Types";

const mapDispatchToProps = {
  setFilter,
  clearCompleted,
};

const Filter = ({
  setFilter,
  clearCompleted,
}: {
  setFilter: (filter: string) => TodoActionTypes;
  clearCompleted: () => void;
}) => {
  return (
    <>
      <button type="button" onClick={() => setFilter(FILTER_ALL)}>
        All
      </button>
      <button type="button" onClick={() => setFilter(FILTER_ACTIVE)}>
        Active
      </button>
      <button type="button" onClick={() => setFilter(FILTER_COMPLTETE)}>
        Completed
      </button>
      <button type="button" onClick={() => clearCompleted()}>
        Clear Done
      </button>
    </>
  );
};

export default connect(null, mapDispatchToProps)(Filter);
