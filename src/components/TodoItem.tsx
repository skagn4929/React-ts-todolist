import React from "react";

type TodoItemProps = {
  item: string;
  onDelete: () => void;
};
const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete }) => {
  return (
    <div>
      <input className="itembox" value={item} readOnly></input>
      <button className="delbutton" onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
