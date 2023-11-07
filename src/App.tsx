import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [todoList] = useState<string[]>([]);
  return (
    <div className="App">
      <div className="header">To-Do List</div>
      <TodoBoard todoList={todoList}></TodoBoard>
    </div>
  );
};

export default App;
