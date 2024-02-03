// src/App.js
import React, { useEffect, useState } from "react";
import { HomePage } from "./components/home/HomePage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/navbar/Header";
import { SideBar } from "./components/navbar/SideBar";
import { MyAssets } from "./components/MyAssets/MyAssets";
import { MyRequests } from "./components/MyRequests/MyRequests";
import { NewRequests } from "./components/NewRequests/NewRequests";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="flex">
                <SideBar />
                <HomePage />
              </div>
            </>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <div className="flex">
                <SideBar />
                <HomePage />
              </div>
            </>
          }
        ></Route>
        <Route
          path="/myAssets"
          element={
            <>
              <Header />
              <div className="flex">
                <SideBar />
                <MyAssets />
              </div>
            </>
          }
        ></Route>
        <Route
          path="/myRequests"
          element={
            <>
              <Header />
              <div className="flex">
                <SideBar />
                <MyRequests />
              </div>
            </>
          }
        ></Route>
        <Route
          path="/newRequests"
          element={
            <>
              <Header />
              <div className="flex">
                <SideBar />
                <NewRequests />
              </div>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
