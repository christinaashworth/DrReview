import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import DoctorList from "./doctors/DoctorList";
import DoctorDetails from "./doctors/DoctorDetails";
import ReviewForm from "./reviews/ReviewForm";
import MyProfile from "./profiles/MyProfile";
import ReviewEdit from "./reviews/ReviewEdit";
import ReviewDelete from "./reviews/ReviewDelete";
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

        <Route path={"/addreview"}>
          <ReviewForm />
        </Route>

          <Route path="/myprofile">
            <MyProfile />
          </Route>

          <Route path={`/review/edit/:id`}>
            <ReviewEdit />
          </Route>

          <Route path={`/review/delete/:id`}>
            <ReviewDelete />
          </Route>

        </Switch>
    </main>
  );
};
