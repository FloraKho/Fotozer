import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import UploadPage from "./components/UploadPhoto";
import ExplorePage from "./components/ExplorePage";
import * as sessionActions from "./store/session";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        <Route path='/photos/upload'>
          <Navigation isLoaded={isLoaded} />
          <UploadPage />
        </Route>
        <Route path='/explore'>
          <Navigation isLoaded={isLoaded} />
          <ExplorePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;