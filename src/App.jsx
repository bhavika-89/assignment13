import TaskForm from "./components/taskform";
import TaskList from "./components/tasklist";
import { TaskProvider } from "./context/taskcontext";
import "./styles.css";

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
