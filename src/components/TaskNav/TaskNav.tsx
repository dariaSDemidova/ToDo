import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./TaskNav.scss";

interface TaskNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TaskNav: React.FC<TaskNavProps> = ({ activeTab, onTabChange }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const currentTasksCount = tasks.filter(
    (task) => !task.completed && !task.deleted
  ).length;
  const completedTasksCount = tasks.filter(
    (task) => task.completed && !task.deleted
  ).length;
  const allTasksCount = tasks.filter((task) => !task.deleted).length;
  const deletedTasksCount = tasks.filter((task) => task.deleted).length;

  return (
    <nav>
      <ul className="task-nav">
        <li
          className={`task-nav__item ${
            activeTab === "current" ? "active" : ""
          }`}
          onClick={() => onTabChange("current")}
        >
          ТЕКУЩИЕ ДЕЛА ({currentTasksCount})
        </li>
        <li
          className={`task-nav__item ${activeTab === "all" ? "active" : ""}`}
          onClick={() => onTabChange("all")}
        >
          ВСЕ ДЕЛА ({allTasksCount})
        </li>
        <li
          className={`task-nav__item ${
            activeTab === "completed" ? "active" : ""
          }`}
          onClick={() => onTabChange("completed")}
        >
          ВЫПОЛНЕННЫЕ ДЕЛА ({completedTasksCount})
        </li>
        <li
          className={`task-nav__item ${
            activeTab === "deleted" ? "active" : ""
          }`}
          onClick={() => onTabChange("deleted")}
        >
          КОРЗИНА ({deletedTasksCount})
        </li>
      </ul>
    </nav>
  );
};

export default TaskNav;
