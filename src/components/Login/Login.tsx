import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  return (
    <div className="login">
      <h1 className="login-title">ВХОД</h1>
      <input
        type="text"
        className="login-input"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="task-button login-button" onClick={handleLogin}>
        Войти
      </button>
    </div>
  );
};

export default Login;
