import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import LandingPage from "./components/LandingPage";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import UploadPage from "./components/UploadPhoto";
import ExplorePage from "./components/ExplorePage";
import Photostream from "./components/Photostream";
import Favorites from "./components/Favorites";
import PhotoDetailPage from "./components/PhotoDetailPage";



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
        <Route path='/photostream'>
          <Navigation isLoaded={isLoaded} />
          <Photostream />
        </Route>
        <Route path='/favorites'>
          <Navigation isLoaded={isLoaded} />
          <Favorites />
        </Route>
        <Route>
          <Navigation isLoaded={isLoaded} />
          <PhotoDetailPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;