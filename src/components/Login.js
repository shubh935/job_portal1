import React, { useState } from "react";
import { loginUser } from "../api/index";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const response = await loginUser(credentials);
      console.log("Login Successful:", response.data);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
