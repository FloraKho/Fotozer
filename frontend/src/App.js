import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UploadPage from "./components/UploadPhotoPage";
import Footer from "./components/Footer";
import ExplorePage from "./components/ExplorePage";
import PhotoDetailPage from "./components/PhotoDetailPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/photos/upload'>
            <UploadPage />
          </Route>
          <Route path='/explore'>
            <ExplorePage />
          </Route>
          <Route path='/photos/:id'>
            <PhotoDetailPage />
          </Route>
        </Switch>
      )}
      <Footer /> */}
      <Switch>
        {/* <Route path='/' exact>

        </Route> */}
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
        <Route path='/explore' >
          <Navigation isLoaded={isLoaded} />
          <ExplorePage />
          <Footer />
        </Route>
        <Route path='/photos/:id'>
          <Navigation isLoaded={isLoaded} />
          <PhotoDetailPage />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;