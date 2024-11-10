import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TaskList from "./components/TaskList/TaskList";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <TaskList /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
