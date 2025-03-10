import React, { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { ToDoAppStyle } from "./styles";
export const ToDoApp: React.FC = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>(
    []
  );
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };
  const handleToggleComplete = (index: number) => {
    const updatedTasks = tasks.map((task: any, i: number) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (index: number) => {
    const updatedTasks = tasks.filter((task: any, i: number) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <ToDoAppStyle>
      <h1>TO DO LIST</h1>
      <p>
        Click on a task to mark it as complete or delete it by click on delete
        button.
      </p>
      <div className="todo-list">
        <input
          type="text"
          value={task}
          className="add-todo-input"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map(
          (task: { text: string; completed: boolean }, index: number) => (
            <ToDoItem
              key={index}
              task={task}
              index={index}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDelete}
            />
          )
        )}
      </ul>
    </ToDoAppStyle>
  );
};
