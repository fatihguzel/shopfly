import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, FormGroup, Label, Input, Button } from "reactstrap";
import { registerAction } from "../../features/Auth/authActions";

const Register = () => {
  const dispatch = useDispatch();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(registerAction(registerData));
  };

  const changeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

    // console.log(registerData);
  };
  return (
    <div
      style={{
        marginBottom: "480px",
        marginTop: "50px",
      }}
    >
      <Form
        onSubmit={registerHandler}
        className="btn btn-danger"
        style={{
          margin: "0 25%",
          width: "50%",
          marginTop: "30px",
        }}
      >
        <Label>
          <h1>Register Form</h1>
        </Label>
        <Row>
          <Row>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={changeHandler}
                id="exampleEmail"
                name="email"
                value={registerData.email}
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
                value={registerData.password}
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
            <Button className="btn btn-dark" onClick={registerHandler}>
              Submit
            </Button>
          </Row>
        </Row>
      </Form>
    </div>
  );
};

export default Register;
