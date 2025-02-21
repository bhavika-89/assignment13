import { useMemo } from "react";
import { useTasks } from "../context/taskcontext";

const TaskList = () => {
  const { tasks, toggleTask, removeTask } = useTasks();

  const completedTasks = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);

  return (
    <div>
      <h3>Completed Tasks: {completedTasks}</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer", flexGrow: 1 }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: "10px" }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
