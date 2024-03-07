import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import loginlogo from "../../Assets/Logo/logo.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    // .required("*Email is required"),
    password: Yup.string()
    // .required("*Password is required"),
  });

  return (
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-md-8 mx-auto">
          <div className="loginWrapper  card p-4">
            <figure className="authfigure">
              <img src={loginlogo} alt="loginlogo" />
            </figure>
            <h4 className="authheading">LOGIN FORM</h4>

            {/* Wrap form inside Formik and provide validation schema */}
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // Submit your form data
                  console.log(values);
                  setSubmitting(false);
                  navigate("/"); // Redirect to home page after successful login
                }, 400);
              }}
            >
              {/* Render form */}
              {({ isSubmitting }) => (
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      <span className="required-label">Email</span>
                    </Form.Label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      as={Form.Control}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                      <span className="required-label">Password</span>
                    </Form.Label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      as={Form.Control}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
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
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
