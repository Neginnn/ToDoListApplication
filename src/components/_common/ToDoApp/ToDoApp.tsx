import React, { useEffect, useState } from "react";
import { ToDoAppStyle } from "./styles";

export const ToDoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTodo = (index: number): void => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEditing = (index: number): void => {
    setEditingIndex(index);
    setEditText(todos[index]);
  };

  const saveEdit = (index: number): void => {
    if (editText.trim() === "") return;
    setTodos(todos.map((todo, i) => (i === index ? editText : todo)));
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <ToDoAppStyle>
      <div className="todo-app">
        <h1>TO DO LIST</h1>
        <p>Click on a task to edit or delete it.</p>

        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTodo}>Add Task</button>
        </div>

        <ul className="task-list">
          {todos.map((todo, index) => (
            <li key={index} className="task-item">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(index);
                      if (e.key === "Escape") cancelEdit();
                    }}
                  />
                  <button className="edit-btn" onClick={() => saveEdit(index)}>
                    Save
                  </button>
                  <button className="delete-btn" onClick={cancelEdit}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="item">{todo}</span>
                  <button
                    className="edit-btn"
                    onClick={() => startEditing(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => removeTodo(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </ToDoAppStyle>
  );
};
