import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend } from "../../../../../declarations/token_backend";
import "./Transfer.css";
import BtnPrimary from "../../ui/buttonPrimary/BtnPrimary";

function Transfer() {
  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisabled, setDisable] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  async function handleClick() {
    setIsHidden(true);
    setDisable(true);
    setIsError(false);

    try {
      const recipient = Principal.fromText(recipientId.trim());
      const amountToTransfer = Number(amount);

      if (isNaN(amountToTransfer) || amountToTransfer <= 0) {
        throw new Error("Invalid amount");
      }

      const result = await token_backend.transfer(recipient, amountToTransfer);
      setFeedback(`✅ ${result}`);
    } catch (err) {
      setFeedback("❌ Invalid recipient or transfer failed.");
      setIsError(true);
    }

    setIsHidden(false);
    setDisable(false);
  }

  return (
    <div className="transfer-container">
      <div className="transfer">
        <fieldset>
          <legend>Recipient Account</legend>
          <input
            type="text"
            id="transfer-to-id"
            placeholder="Enter Principal ID"
            value={recipientId}
            onChange={(e) => setId(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Amount</legend>
          <input
            type="number"
            id="amount"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </fieldset>

        <BtnPrimary title='Transfer' onClick={handleClick}/>

        {!isHidden && (
          <p className={`feedback ${isError ? "error" : ""}`}>{feedback}</p>
        )}
      </div>
    </div>
  );
}

export default Transfer;
