import { useRef, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {
  id: number;
  text: string;
  complete: boolean;
  onToggleClick: (id: number) => void;
  removeTodo: (id: number) => void;
};

const TodoItem = ({ id, text, complete, onToggleClick, removeTodo }: Props) => {
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
      <div className="todo-desc">
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
      <span className="close" onClick={() => removeTodo(id)}>
        <AiOutlineDelete />
      </span>
    </div>
  );
};

export default TodoItem;
