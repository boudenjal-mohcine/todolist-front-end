import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Provider } from "react-redux";
import Home from "./components/home/HomeComponent";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Home></Home>
    </>
  );
}

export default App;
