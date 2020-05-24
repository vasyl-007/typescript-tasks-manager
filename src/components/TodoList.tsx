import React from "react";

type TodoListProps = {
  todos: any[];
};

// interface TodoFormProps {
//   onAdd(title: string): void;
// }

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className="todo">
            <label>
              <input type="checkbox" />
              <span></span>
              <i className="material-icons teal-text text-darken-1">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
