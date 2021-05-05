import React, { useState, useContext } from "react";
import { Button, Form } from 'semantic-ui-react';
import { useHistory, Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function Login() {
  const history = useHistory();
  const { login } = useContext(UserProfileContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => history.push("/"))
      .catch(() => {
        
        alert("Invalid email or password");
      })
  };

  return (
    <Form onSubmit={loginSubmit}>
      <fieldset>
        <Form.Field>
          <label for="email">Email</label>
          <input id="email" type="text" onChange={e => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label for="password">Password</label>
          <input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Button>Login</Button>
        </Form.Field>
        <em>
          Not registered? <Link to="register">Register</Link>
        </em>
      </fieldset>
    </Form>
  );
}
