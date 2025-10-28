import React, { useState, useEffect } from "react";
import "./Faucet.css"
import { canisterId, createActor } from "../../../../declarations/token_backend";
import { AuthClient } from "@dfinity/auth-client";



function Faucet() {
  const [isDisabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState("CLAIM TOKENS");
  const [feedback, setFeedback] = useState(null);

  async function handleClick(event) {

    event.preventDefault();
    setDisabled(true);
    setBtnText("Processing...");
    setFeedback(null);

    try {
      // Authenticate client
      const authClient = await AuthClient.create();
      const identity = await authClient.getIdentity();

      const authenticatedCanister = createActor(canisterId, {
        agentOptions: {
          identity,
        }
      });

      // Wait for payout response
      const result = await authenticatedCanister.payOut(); 
      console.log(result);
      
      // response messaage to front-end
      if (result == 'success'){
        setFeedback({ response: result, message: 'Payout successful! 10,000 ZeRo tokens claimed.', type: 'success' });
      } else if (result == 'claimed'){
        setFeedback({ response: result, message: 'Tokens already claimed!', type: 'claimed' });
      } else if (result == 'insufficient funds'){
        setFeedback({ response: result, message: 'Insuficient funds in the Canister!', type: 'no-funds' });
      }
      
      
    } catch (error) {
      console.error("Payout error:", error);
      setFeedback({ response: "Transaction failed. Please try again.", message: 'Something went wrong! Please try again.', type: 'error'});
    } 
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DLUK tokens here! Claim 10,000 ZeRo coins to your account.</label>
      
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {btnText}
        </button>
      </p>

      {/* Feedback Message */}
      {feedback && (
        <p className={`feedback ${feedback.type === 'error' ? 'error' : feedback.type}`}>
          {feedback.message}
        </p>
      )}
    </div>
  );
}


export default function App() {
  return (
    <Faucet />
  );
}
