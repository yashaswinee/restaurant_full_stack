import { React, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });

    if (!response.ok) {
      alert("Enter valid credentials");
    } else if (response.ok) {
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (
    <div className="section__padding">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={creds.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={creds.password}
            onChange={onChange}
          />
        </div>

        <div className="buttons">
          <button type="submit" className="m-3 btn btn-success">
            Login
          </button>
          <Link to="/signup">
            <button type="submit" className="m-3 btn btn-danger">
              I am new here
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
