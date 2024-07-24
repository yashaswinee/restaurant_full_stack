import { React, useState } from "react";
import { json, Link } from "react-router-dom";

const Signup = () => {
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    phoneno: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(creds),
    });

    if(!response.ok){
        alert('Enter valid credentials')
    }
  };

  const onChange =(e) =>{
    setCreds({...creds, [e.target.name]: e.target.value})
  }

  return (
    <div className="section__padding">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={creds.name}
            onChange={onChange}
          />
        </div>

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

        <div className="mb-3">
          <label htmlFor="exampleInputLocation1" className="form-label">
            location
          </label>
          <input
            type="location"
            className="form-control"
            id="exampleInputLocation1"
            name="location"
            value={creds.location}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPhoneno1" className="form-label">
            Phone number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPhoneNo1"
            name="phoneno"
            value={creds.phoneno}
            onChange={onChange}
          />
        </div>

        <div className="buttons">
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
