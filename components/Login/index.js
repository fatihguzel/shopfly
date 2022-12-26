import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, FormGroup, Label, Input, Button } from "reactstrap";
import { loginAction } from "../../features/Auth/authActions";
const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.loginedUser.logined);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginData));
  };

  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        marginBottom: "480px",
        marginTop: "50px",
      }}
    >
      <Form
        className="btn btn-primary"
        onSubmit={loginHandler}
        style={{
          margin: "0 25%",
          width: "50%",
          marginTop: "30px",
        }}
      >
        <Label>
          <h1>Login Form</h1>
        </Label>
        <Row>
          <Row>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={changeHandler}
                id="exampleEmail"
                name="email"
                value={loginData.email}
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                onChange={changeHandler}
                id="examplePassword"
                name="password"
                value={loginData.password}
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
            <Button className="btn btn-dark" onClick={loginHandler}>
              Submit
            </Button>
          </Row>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
