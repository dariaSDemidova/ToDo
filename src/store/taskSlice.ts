import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: string;
  text: string;
  completed: boolean;
  deleted: boolean;
};

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        deleted: false,
      };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    toggleCompleteTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    moveTaskToTrash: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.deleted = true;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    clearAllTasks: (state) => {
      state.tasks = [];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const {
  addTask,
  toggleCompleteTask,
  moveTaskToTrash,
  removeTask,
  clearAllTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
