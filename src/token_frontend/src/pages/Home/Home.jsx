import React from "react";
import Header from "../../components/Header/Header";
import Faucet from "../../components/Faucet/Faucet";
import Balance from "../../components/Balance/Balance";
import Transfer from "../../components/Transfer/Transfer";
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