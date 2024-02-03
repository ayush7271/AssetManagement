// src/App.js
import React, { useEffect, useState } from "react";
import { HomePage } from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
