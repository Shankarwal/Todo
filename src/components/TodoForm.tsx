import Filter from "./Filter";
import Input from "./Input";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { RootState } from "../store/Types";

type Props = {};

const TodoForm = (props: Props) => {
  const list = useSelector((state: RootState) => state.todoItems);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="main">
      <div className="container">
        <form className="todo-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <Input />
            <div className="controls">
              <Filter />
            </div>
          </div>
        </form>
        {list?.length > 0 ? (
          <div className="list">
            <TodoList />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TodoForm;
