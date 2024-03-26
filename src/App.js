import "./styles/App.css";

import * as React from "react";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/AppRouter";

import { store } from "./store/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
