import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import classes from "./form.module.css";

export const Form = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [storedPassword, setStoredPassword] = useState("");
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const initialPassword = "React.35!"; // Contraseña inicial fija

  useEffect(() => {
    // Cargar la contraseña almacenada o establecer la inicial si no hay ninguna
    const savedPassword = localStorage.getItem("storedPassword");
    if (savedPassword) {
      setStoredPassword(savedPassword);
    } else {
      setStoredPassword(initialPassword);
      localStorage.setItem("storedPassword", initialPassword);
    }

    // Verificar si el usuario ya está autenticado
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated === "true") {
      navigate("/mango"); // Si ya está autenticado, redirigir automáticamente
    }
  }, [navigate]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Evita el envío por defecto

    // Resetea la autenticación antes de validar
    localStorage.removeItem("authenticated");

    if (password === storedPassword) {
      localStorage.setItem("authenticated", "true"); // Guarda autenticación si es correcta
      navigate("/mango"); // Redirige a la página protegida con react-router
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.form}>
        <h3>This content is protected</h3>
        <div className={classes.formContainer}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
          {error && <p className={classes.error}>{error}</p>}
        </div>
      </div>
    </form>
  );
};
