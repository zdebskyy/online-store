import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { Context } from "./index";
import NavigationBar from "./components/Navbar/Navbar";
import { observer } from "mobx-react-lite";
import { check } from "./Api/userApi";

const App = observer(() => {
  const token = localStorage.getItem("token");
  const { user } = useContext(Context);
  useEffect(() => {
    if (token) {
      check().then((data) => {
        user.setIsAuth(true);
      });
    }
  }, [user, token]);

  return (
    <>
      <NavigationBar />
      <Switch>
        {user.isAuth &&
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
});

export default App;
