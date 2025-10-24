#!/bin/bash

clear
# Exit immediately if a command exits with a non-zero status
set -e

# --- 1. Get Owner Principal Key ---
echo "Generating Crypto Wallet Information..."

OWNER_PRINCIPAL=$( \dfx identity get-principal )
OWNER_PUBLIC_KEY="principal \"$OWNER_PRINCIPAL\""

# Check for empty principal before proceeding
if [ -z "$OWNER_PRINCIPAL" ]; then
    echo "ERROR: Principal ID is empty. Is 'dfx' running and an identity active?" >&2
    exit 1
fi

{
    echo "==========================================="
    echo "| DFINITY Local Wallet and Canister Info  |"
    echo "==========================================="
    echo ""
}

# --- 2. Write Owner Information ---
{
    echo "🔑 Owner Principal Key"
    echo "-----------------------"
    echo "$OWNER_PUBLIC_KEY"
}

BALANCE_OUTPUT=$(dfx canister call token_backend balanceOf "( $OWNER_PUBLIC_KEY )" 2>&1)
{
    echo "Token Balance: $BALANCE_OUTPUT"
    echo ""
}

# --- 4. Get and Write Backend Canister ID ---
CANISTER_PRINCIPAL=$( \dfx canister id token_backend )
CANISTER_PUBLIC_KEY="principal \"$CANISTER_PRINCIPAL\""
CANISTER_BALANCE_BEFORE=$( dfx canister call token_backend balanceOf "( $CANISTER_PUBLIC_KEY )" 2>&1)
{
    echo "⚙️  Backend Canister ID"
    echo "-----------------------"
    echo "$CANISTER_PUBLIC_KEY"
    echo "Token Balance: $CANISTER_BALANCE_BEFORE"
    echo ""
} 

read -p "Enter transfer amount: " TRANSFER_AMOUNT
# --- 5. Transfer tokens ---

echo "Transfering tokens ..."
dfx canister call token_backend transfer "($CANISTER_PUBLIC_KEY, $TRANSFER_AMOUNT)"
CANISTER_BALANCE_AFTER=$( dfx canister call token_backend balanceOf "( $CANISTER_PUBLIC_KEY )" 2>&1)
echo "Backend Canister balance after transfer: $CANISTER_BALANCE_AFTER"
echo ""
