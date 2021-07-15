import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import BasicPage from "./pages/BasicPage";
import AboutPage from "./pages/AboutPage";
import ResourcePage from "./pages/ResourcePage";
import ChatBot from "./components/ChatBot/ChatBot";
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
          backgroundColor: "#f7f7f8",
        }}
      >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route path="/Dashboard" component={Dashboard} exact></Route>
          <Route path="/Login" component={Login} exact></Route>
          <Route path="/BasicPage" component={BasicPage} exact></Route>
          <Route path="/AboutPage" component={AboutPage} exact></Route>
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

        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
