import React, { useRef, useState } from "react";

type Props = {
  id: number;
  text: string;
  complete: boolean;
  onToggleClick: (id: number) => void;
};

const TodoItem = ({ id, text, complete, onToggleClick }: Props) => {
  const [checked, setChecked] = useState(false);
  let radio = useRef<HTMLInputElement>(null);
  const handleToggleClick = (id: number) => {
    if (radio && radio.current) {
      radio.current.checked = !radio.current.checked;
      onToggleClick(id);
    }
  };
  return (
    <div className="list-item">
      <input
        ref={radio}
        type="radio"
        onClick={() => handleToggleClick(id)}
        onChange={() => setChecked(!checked)}
        checked={complete}
      />
      <span style={{ textDecoration: complete ? "line-through" : "none" }}>
        {text}
      </span>
    </div>
  );
};

export default TodoItem;
