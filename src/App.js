import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { Context } from "./index";
import NavigationBar from "./components/Navbar/Navbar";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <NavigationBar />
      <Switch>
        {!user.isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
