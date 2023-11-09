import React from "react";

type TodoItemProps = {
  item: string;
  onDelete: () => void;
  handleUpdate: () => void;
  updateValue: string;
  setUpdateValue: React.Dispatch<React.SetStateAction<string>>;
  isUpdateVisible: boolean;
  setIsUpdateVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onDelete,
  updateValue,
  setUpdateValue,
  handleUpdate,
  isUpdateVisible,
  setIsUpdateVisible,
}) => {
  // const [isShowUpdateInput, setIsShowUpdateInput] = useState(false);
  const handleClickUpdate = () => {
    handleUpdate();
    setIsUpdateVisible(false);
  };
  return (
    <div>
      <input className="itembox" value={item}></input>
      <button className="delbutton" onClick={onDelete}>
        삭제
      </button>
      {!isUpdateVisible && (
        <button className="upbutton" onClick={() => setIsUpdateVisible(true)}>
          수정
        </button>
      )}
      {isUpdateVisible && (
        <>
          <div className="upvalue">
            <input
              className="upinput"
              type="text"
              value={updateValue}
              onChange={(event) => setUpdateValue(event.target.value)}
              autoFocus
            />
            <button className="chbutton" onClick={handleClickUpdate}>
              확인
            </button>
          </div>
        </>
      )}
      {/* <button onClick={() => setIsShowUpdateInput((prev) => !prev)}>
        수정
      </button> */}
      {/* {isShowUpdateInput && (
        <button
          onClick={() => {
            setIsShowUpdateInput(false);
            handleUpdate();
          }}
        >
          확인
        </button>
      )} */}
    </div>
  );
};

export default TodoItem;
