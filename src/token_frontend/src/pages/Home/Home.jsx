import React from "react";
import Header from "../../components/Header/Header";
import Faucet from "../../components/Faucet/Faucet";
import Balance from "../../components/Balance/Balance";
import Transfer from "../../components/Transfer/Transfer";


const App = () => {

  return (
    <div id="screen">
      <Header />
      <Faucet />
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;