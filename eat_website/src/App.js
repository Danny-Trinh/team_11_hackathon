import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import BasicPage from "./pages/BasicPage";
import ResourcePage from "./pages/ResourcePage";
// import "./css/sb-admin-2.css";
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
          <Route path="/Dashboard" component={Dashboard} exact></Route>
          <Route path="/Login" component={Login} exact></Route>
          <Route path="/BasicPage" component={BasicPage} exact></Route>
          <Route path="/ResourcePage" component={ResourcePage} exact></Route>
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
