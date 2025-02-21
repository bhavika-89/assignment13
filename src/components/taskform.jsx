import { useState, useCallback } from "react";
import { useTasks } from "../context/taskcontext";

const TaskForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  }, [text, addTask]);

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input 
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a task..."
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
