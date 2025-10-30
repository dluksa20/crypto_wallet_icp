import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend } from "../../../../../declarations/token_backend";
import "./Balance.css";
import PrimaryButton from "../../ui/PrimaryButton/PrimaryButton";
import PrimaryInput from "../../forms/PrimaryInput/PrimaryInput";


function Balance() {
  const [inputValue, setInputValue] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [isHidden, setHidden] = useState(true);

  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const balance = await token_backend.balanceOf(principal);
    setAccountBalance(balance.toLocaleString());
    setTokenSymbol(await token_backend.tokenSymbol());
    setHidden(false);
  }

  return (
    <div className="balance-container">
      <PrimaryInput
        value={inputValue}
        setInputValue={setInputValue}
        title="Check account token balance:"
        placeholder="Enter a Principal ID"
      />
      <PrimaryButton title="Check Balance" onClick={handleClick} />
      <p hidden={isHidden}> Wallet has balance of {accountBalance} {tokenSymbol} tokens</p>

    </div>
  );
}

export default Balance;
