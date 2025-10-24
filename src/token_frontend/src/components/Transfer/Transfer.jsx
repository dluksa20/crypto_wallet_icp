import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend } from "../../../../declarations/token_backend";

function Transfer() {

  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");  
  const [isDisabled, setDisable] = useState(false)
  const [feedback, setFeedback] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  
  


  async function handleClick() {
    setIsHidden(true)
    setDisable(true)
    const recipient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);
    const result = await token_backend.transfer(recipient, amountToTransfer);
    setFeedback(result)
    setIsHidden(false)
    setDisable(false)
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button disabled={isDisabled} id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
