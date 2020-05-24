import React, { useState, Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: true,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    // console.log("Toggler is working");
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          // console.log("id the same!!!", todo.completed);
          todo.completed = !todo.completed;
          // console.log("id the same!!!", todo.completed);
        }
        console.log("id: ", todo.completed);
        console.log("====================");

        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </Fragment>
  );
};

export default App;
