import React from "react";

const TodoItem = ({ task, index, removeTask }) => {
  return (
    <li>
      {task}
      <button onClick={() => removeTask(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
