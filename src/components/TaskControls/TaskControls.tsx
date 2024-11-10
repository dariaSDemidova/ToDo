import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, clearAllTasks } from "../../store/taskSlice";
import "./TaskControls.scss";

const TaskControls: React.FC = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  const handleClearAll = () => {
    dispatch(clearAllTasks());
  };

  return (
    <div className="task-controls">
      <button className="task-button add-button" onClick={handleAddTask}>
        ДОБАВИТЬ
      </button>
      <input
        type="text"
        className="task-input"
        placeholder="Пополните список..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button className="task-button clear-button" onClick={handleClearAll}>
        ОЧИСТИТЬ
        <span className="icon">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </span>
      </button>
    </div>
  );
};

export default TaskControls;
