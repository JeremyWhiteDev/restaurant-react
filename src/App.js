import logo from "./logo.svg";
import "./App.css";

import { NavBar } from "./components/nav/NavBar.js";
import {
  Route,
  Routes,
  Outlet,
  Switch,
  Link,
  BrowserRouter,
} from "react-router-dom";

export const App = () => {
  return (
    <>
      <NavBar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/about" element={<h1>ABOUT</h1>} />
        <Route path="/" element={<h1>HOME</h1>} />
      </Routes>
    </>
  );
};
