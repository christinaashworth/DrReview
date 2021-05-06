import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import DoctorList from "./doctors/DoctorList";
import DoctorDetails from "./doctors/DoctorDetails";
import Hello from "./Hello";
import Login from "./Login";
import Register from "./Register";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route exact path="/doctors">
          <DoctorList />
        </Route>

        <Route path={`/doctors/:id`}>
          <DoctorDetails />
        </Route>

          {/* <Route path="/myprofile">
            <ViewProfile />
          </Route> */}

        </Switch>
    </main>
  );
};
