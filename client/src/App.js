import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Navbar from "./components/Navbar";
import { DoctorProvider } from "./providers/DoctorProvider";

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <DoctorProvider>
          <Navbar />
          <ApplicationViews />
        </DoctorProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
