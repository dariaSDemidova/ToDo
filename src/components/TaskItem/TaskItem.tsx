import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  toggleCompleteTask,
  moveTaskToTrash,
  removeTask,
} from "../../store/taskSlice";
import "./TaskItem.scss";
import checkIcon from "../../assets/check.svg";
import deleteIcon from "../../assets/delete.svg";

interface TaskItemProps {
  activeTab: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ activeTab }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "current") return !task.completed && !task.deleted;
    if (activeTab === "completed") return task.completed && !task.deleted;
    if (activeTab === "deleted") return task.deleted;
    return !task.deleted;
  });

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <li className="task-item" key={task.id}>
          {task.text}
          <div className="task-item__buttons">
            {activeTab !== "deleted" && (
              <button
                className="task-item__button"
                onClick={() => dispatch(toggleCompleteTask(task.id))}
              >
                <img src={checkIcon} alt="check" />
              </button>
            )}
            <button
              className="task-item__button"
              onClick={() => {
                if (activeTab === "deleted") {
                  dispatch(removeTask(task.id));
                } else {
                  dispatch(moveTaskToTrash(task.id));
                }
              }}
            >
              <img src={deleteIcon} alt="delete" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskItem;
