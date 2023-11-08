import React, { useState } from "react";
import TodoItem from "./TodoItem";

type TodoBoardProps = {
  todoList: string[];
};

const TodoBoard: React.FC<TodoBoardProps> = ({ todoList }) => {
  const [todos, setTodos] = useState(todoList);
  const [inputValue, setInputValue] = useState("");
  const [updateValue, setUpdateValue] = useState("")
  const [showUpdateButtonTrigger, setShowUpdateButtonTrigger] = useState(false)
  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  const handleDelete = (index: number) => { //1
    // #1
    // const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    // setTodos(newTodos)

    // #2
    const newTodos = todos.filter((_, innerIndex) => innerIndex !== index)
    setTodos(newTodos)

    // #3
    // setTodos((prev) => prev.filter((_, innerIndex) => innerIndex !== index));
  };


  const handleUpdate = (index: number) => {
    const newTodos = todos.map((todo, innerIndex) => { // 0,1,2    2 === 1
      if (innerIndex === index) {
        return updateValue
      }
      return todo
    })

    // console.log("newTodos: ", newTodos)
    setTodos(newTodos)
    setUpdateValue("")
  }

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
            updateValue={updateValue}
            setUpdateValue={setUpdateValue}
            handleUpdate={() => handleUpdate(index)}
          />
        ))}
      </div>
    </>
  );
};

export default TodoBoard;
