import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {

        alert("Login Success");

        if (data.user.role === "admin") {
          window.location.href = "/admin";
        } else if (data.user.role === "manager") {
          window.location.href = "/manager";
        } else {
          window.location.href = "/employee";
        }

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div>

      <h1>AtomQuest Portal Login</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;