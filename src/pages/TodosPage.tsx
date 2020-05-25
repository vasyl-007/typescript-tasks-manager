import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
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
        todo.id !== id
          ? todo
          : {
              ...todo,
              completed: !todo.completed,
            }
      )
    );

    // setTodos((prev) =>
    //   prev.map((todo) => {
    //     if (todo.id === id) {
    //       console.log("id the same!!!", todo.id, id);
    //       // console.log("completed: ", todo.completed);
    //       todo.completed = !todo.completed;
    //       // console.log("id the same!!!", todo.completed);
    //     }
    //     return todo;
    //   })
    // );
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
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};
