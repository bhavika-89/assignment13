import { createContext, useReducer, useContext, useCallback } from "react";

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = useCallback((text) => {
    dispatch({ type: ADD_TASK, payload: text });
  }, []);

  const removeTask = useCallback((id) => {
    dispatch({ type: REMOVE_TASK, payload: id });
  }, []);

  const toggleTask = useCallback((id) => {
    dispatch({ type: TOGGLE_TASK, payload: id });
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
