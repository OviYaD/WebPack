import React from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

export function App() {
  return (
    <div className="App">
      {/* <h1>HI</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/todolist" exact element={<TodoList />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
