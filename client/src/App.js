import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Navbar from "./components/Navbar";
import { DoctorProvider } from "./providers/DoctorProvider";
import { ReviewProvider } from "./providers/ReviewProvider";

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <DoctorProvider>
          <ReviewProvider>
            <Navbar />
            <ApplicationViews />
          </ReviewProvider>
        </DoctorProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
