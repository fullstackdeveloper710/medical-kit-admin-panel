import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import loginlogo from "../../Assets/Logo/logo.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData]= useState({
    email:"",
    password:"",
  })
  const [error, setError]= useState({
    emailError:"",
    passwordError:"",
  })
  const {email, password}= data;
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-md-8 mx-auto">
          <div className="loginWrapper  card p-4">
            <figure className="authfigure">
              <img src={loginlogo} alt="loginlogo" />
            </figure>
            <h4 className="authheading">LOGIN FORM</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-between">
                <Button variant="primary" type="submit" onClick={(e) =>{
                  e.preventDefault();
                  navigate('/');     
                }}>
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
