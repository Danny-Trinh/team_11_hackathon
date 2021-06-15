import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import BasicPage from "./pages/BasicPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/DashBoard" />
          </Route>
          <Route path="/Home" component={Home} exact></Route>
          <Route path="/Login" component={Login} exact></Route>
          <Route path="/BasicPage" component={BasicPage} exact></Route>
          <Route>
            <React.Fragment>
              <h1 className="display-1 text-center font-weight-bold">
                404 Error
              </h1>
              <p className="display-1 text-center">Page Not Found </p>
            </React.Fragment>
            );
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
