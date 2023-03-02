import React from "react";
import { addItem } from "../store/Actions";
import { connect } from "react-redux";
import { TodoActionTypes } from "../store/Types";

const mapDispatchToProps = {
  addItem,
};

const Input = ({ addItem }: { addItem: (item: string) => TodoActionTypes }) => {
  const handleInput = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    // console.log(e.target.value);
    if (e.key === "Enter") {
      if (e.target.value && e.target.value.trim().length > 0) {
        addItem(e.target.value);
      }
      e.target.value = "";
    }
  };

  return (
    <input
      id="todoInput"
      type="text"
      onKeyDown={handleInput}
      placeholder="Add todo"
    />
  );
};

export default connect(null, mapDispatchToProps)(Input);
