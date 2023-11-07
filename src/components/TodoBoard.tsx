import React, { useState } from "react";
import TodoItem from "./TodoItem";

type TodoBoardProps = {
  todoList: string[];
};

const TodoBoard: React.FC<TodoBoardProps> = ({ todoList }) => {
  const [todos, setTodos] = useState(todoList);
  const [inputValue, setInputValue] = useState("");
  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const handleDelete = (index: number) => {
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setTodos(newTodos);
  };
  return (
    <>
      <div className="todoboard">
        <input
          className="inputbox"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <button className="addbutton" onClick={handleAdd}>
          추가
        </button>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            item={todo}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </>
  );
};

export default TodoBoard;
