import React, { useState } from "react";
import TaskControls from "../TaskControls/TaskControls";
import TaskNav from "../TaskNav/TaskNav";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss";

const TaskList: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TaskControls />
      <div className="tasks">
        <TaskNav activeTab={activeTab} onTabChange={handleTabChange} />
        <TaskItem activeTab={activeTab} />
      </div>
    </>
  );
};

export default TaskList;
