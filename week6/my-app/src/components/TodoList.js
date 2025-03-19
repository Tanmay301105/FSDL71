import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TodoList;
