import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend } from "../../../../../declarations/token_backend";
import "./Balance.css";
import BtnPrimary from "../../ui/buttonPrimary/BtnPrimary";
import InputPrimary from "../../forms/inputPrimary/InputPrimary";
import InfoText from "../../styledComponets/InfoText";

function Balance() {
  const [inputValue, setInputValue] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [isHidden, setHidden] = useState(true);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const balance = await token_backend.balanceOf(principal);
    setAccountBalance(balance.toLocaleString());
    setTokenSymbol(await token_backend.tokenSymbol());
    setHidden(false);
  }

  return (
    <div className="balance-container">
      <InputPrimary
        value={inputValue}
        setInputValue={handleInputChange}
        title="Check account token balance:"
        placeholder="Enter a Principal ID"
      />
      <BtnPrimary title="Check Balance" onClick={handleClick} />
      <InfoText
        isHidden={isHidden}
        text={`This account has a balance of ${accountBalance} ${tokenSymbol}`}
      />
    </div>
  );
}

export default Balance;
