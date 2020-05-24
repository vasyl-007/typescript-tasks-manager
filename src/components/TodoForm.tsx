import React, { useRef } from "react";
// import { useState } from "react";

export const TodoForm: React.FC = () => {
  //   const [title, setTitle] = useState<string>("");

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
      ref.current!.value = "";
      //   console.log(title);
      //   setTitle("");
    }
  };
  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter new task"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Typing new task
      </label>
    </div>
  );
};
