import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend } from "../../../../../declarations/token_backend";
import "./Transfer.css";
import BtnPrimary from "../../ui/PrimaryButton/PrimaryButton";
import InputPrimary from "../../forms/PrimaryInput/PrimaryInput";
import PrimaryFeedback from "../../ui/PrimaryFeedback/PrimaryFeedback";

function Transfer() {
  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisabled, setDisable] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isProcessing, setIsProcessing] = useState("Transfer");

  async function handleClick() {
    setDisable(true);
    setIsProcessing("Processing...");
    try {
      const recipient = Principal.fromText(recipientId.trim());
      const amountToTransfer = Number(amount);

      if (isNaN(amountToTransfer) || amountToTransfer <= 0) {
        throw new Error("Invalid amount");
      }

      const result = await token_backend.transfer(recipient, amountToTransfer);
      if (result === "success") {
        setFeedback({
          response: result,
          message: "Transfered Succesfully",
          type: "ok",
        });
      } else if (result === "insufficient funds") {
        setFeedback({
          response: result,
          message: "Insufficient Funds",
          type: "warning",
        });
      }
      console.log(result);
    } catch (err) {
      setFeedback({
        response: err,
        message: "Error. Check details and try again..",
        type: "error",
      });
      console.log(err);
      setIsError(true);
    }

    setIsProcessing("Transfer");
    setDisable(false);
  }

  return (
    <div className="transfer-container">
      <div className="transfer-subcontainer">
        <InputPrimary
          value={recipientId}
          setInputValue={setId}
          title="Recipient Account"
          placeholder="Enter Principal ID"
        />
        <InputPrimary
          value={amount}
          setInputValue={setAmount}
          title="Amount"
          placeholder="0.00"
        />

        <BtnPrimary
          title={isProcessing}
          onClick={handleClick}
          isDisabled={isDisabled}
        />

        <PrimaryFeedback feedback={feedback} />
      </div>
    </div>
  );
}

export default Transfer;
