import React, { useState } from "react";

type TodoItemProps = {
  item: string;
  onDelete: () => void;
  handleUpdate: () => void;
  updateValue: string;
  setUpdateValue: React.Dispatch<React.SetStateAction<string>>;
};
const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onDelete,
  updateValue,
  setUpdateValue,
  handleUpdate,
}) => {
  const [isShowUpdateInput, setIsShowUpdateInput] = useState(false);
  return (
    <div>
      {isShowUpdateInput && (
        <input
          type="text"
          value={updateValue}
          onChange={(event) => setUpdateValue(event.target.value)}
        />
      )}
      <input className="itembox" value={item}></input>
      <button className="delbutton" onClick={onDelete}>
        삭제
      </button>
      <button onClick={() => setIsShowUpdateInput((prev) => !prev)}>
        수정
      </button>
      {isShowUpdateInput && (
        <button
          onClick={() => {
            setIsShowUpdateInput(false);
            handleUpdate();
          }}
        >
          확인
        </button>
      )}
    </div>
  );
};

export default TodoItem;
