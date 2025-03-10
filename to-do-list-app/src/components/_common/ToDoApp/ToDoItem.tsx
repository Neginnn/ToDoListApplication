import React from "react";
import { ToDoAppStyle } from "./styles";
interface ToDoItemProps {
  task: any;
  index: number;
  onToggleComplete: any;
  onDelete: (index: number) => void;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({
  task,
  index,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <>
      <li
        className="to-do-item"
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        <span onClick={() => onToggleComplete(index)}>{task.text}</span>
        <button onClick={() => onDelete(index)}>Delete</button>
      </li>
    </>
  );
};
