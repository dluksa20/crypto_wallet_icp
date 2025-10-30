import React from "react";
import Header from "../../components/templates/Header/Header";
import Faucet from "../../components/templates/Faucet/Faucet";
import Balance from "../../components/templates/Balance/Balance";
import Transfer from "../../components/templates/Transfer/Transfer";

import "./Home.css"


const App = () => {

  return (
    <div className="screen">

      <Header />
      <div className="home-container">
        <Faucet />
        <Transfer />
        <Balance />
      </div>
    </div>
  );
}

export default App;