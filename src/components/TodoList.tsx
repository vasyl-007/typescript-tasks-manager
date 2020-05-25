import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle: (id: number) => void;
  //   onToggle(id: number): void;
  onRemove: (id: number) => void;
  //   onToggle?(id: number): void;         // необязательные свойства через ?
  //   onRemove?: (id: number) => void;
};

// interface TodoFormProps {
//   onAdd(title: string): void;
// }

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  if (todos.length === 0) {
    return <p className="center">There is no available tasks</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();

    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              {/* <input
                type="checkbox"
                defaultChecked={todo.completed}
                className="filled-in"
              /> */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
                // className="filled-in"
                // onClick={() => onToggle(todo.id)}
                // onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons teal-text text-darken-1"
                // onClick={() => onRemove(todo.id)}
                onClick={(event) => removeHandler(event, todo.id)}
                // onClick={onRemove.bind(null, todo.id)}
              >
                delete_sweep
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
