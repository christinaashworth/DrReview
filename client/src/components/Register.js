import React, { useState, useContext } from "react";
import { Button, Form } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function Register() {
  const history = useHistory();
  const { register } = useContext(UserProfileContext);

  const [username, setUsername] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [dateCreated, setDateCreated] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const userProfile = { username, city, email, profilePhoto, dateCreated };
      register(userProfile, password)
        .then(() => history.push("/"));
    }
 };

  return (
    <Form onSubmit={registerClick}>
      <fieldset>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={e => setCity(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label for="email">Email</label>
          <input id="email" type="text" onChange={e => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label htmlFor="profilePhoto">Profile Image URL</label>
          <input id="profilePhoto" type="text" onChange={e => setProfilePhoto(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label for="password">Password</label>
          <input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label for="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Button>Register</Button>
        </Form.Field>
      </fieldset>
    </Form>
  );
}
