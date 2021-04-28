import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";
import { BrowserRouter } from "react-router-dom";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ user: new UserStore() }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById("root")
);
