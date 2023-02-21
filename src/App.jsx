/** @format */

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import firebase, { FirebaseContext } from "./firebase";

import Menu from "./pages/Menu";
import NewPlate from "./pages/NewPlate";
import Orders from "./pages/Orders";
import Sidebar from "./components/ui/Sidebar";

import "./App.css";

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}>
      <div className='md:flex min-h-screen'>
        <Sidebar />

        <div className='md:w-2/5 xl:w-4/5 p-6'>
          <Routes>
            <Route path='/' element={<Orders />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/new-plate' element={<NewPlate />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
