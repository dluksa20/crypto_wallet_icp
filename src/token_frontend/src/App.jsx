import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Wallet from "./pages/Wallet/Wallet";
import Claim from "./pages/Claim/Claim";
import Send from "./pages/Send/Send";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/claim" element={<Claim />} />
      <Route path="/transfer" element={<Send />} />
    </Routes>
  );
};

export default App;
