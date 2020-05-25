import React, { useState, useEffect, Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    // console.log("Toggler is working", id);
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      )
    );
    // prev.map((todo) => {
    //   if (todo.id === id) {
    //     // console.log("id the same!!!", todo.id, id);
    //     console.log("completed: ", todo.completed);
    //     todo.completed = false;
    //     todo.completed = true;
    //     // todo.completed = !todo.completed;
    //     console.log("completed: ", todo.completed);
    //     // console.log("id the same!!!", todo.completed);
    //   }

    //   return todo;
    // })

    // prev.map((todo) => (todo.id !== id) ? todo : ({...todo, completed: !todo.completed}))
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm("Are you shure want to delete this Task?");
    // const shouldRemove = window.confirm(
    //   "Are you shure want to delete this Task?"
    // );
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
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
