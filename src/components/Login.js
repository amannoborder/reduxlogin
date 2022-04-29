import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmail } from "validator";
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const state = useSelector(state => state.state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.prevent.deafult();
  
  }

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const validname = (value) => {
    if (value.length < 3 || value.length > 10) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 10 letters.
        </div>
      );
    }
  };
  const validemail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }


  };
  const validpassword = (value) => {
    if (value.length < 6 || value.length > 10) {
      return (
        <div className="alert alert-danger" role="alert">
          please enter password betwwen 6 to 10 characters
        </div>
      );
    }

  };
  useEffect(() => {
    if (login) {
      setTimeout(() => {
        navigate('/Logout');
      }, 1000);
    }
  }, [login]);

  return (
    <>
      <div className="login">

        <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
          <h1>Login Here!!!</h1>
          <input type="name" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} validations={[required, validname]} /><br />
          <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} validations={[required, validemail]} /><br />
          <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} validations={[required, validpassword]} /><br />
          <button type='sumit' className="sumitBtn">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login;
