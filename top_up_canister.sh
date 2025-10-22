#!/bin/bash

clear
# Exit immediately if a command exits with a non-zero status
set -e

# Define the output file name
OUTPUT_FILE="crypto_wallet_info.txt"

# Clear the output file or create it if it doesn't exist
> "$OUTPUT_FILE"

# --- 1. Get Owner Principal Key ---
echo "Generating Crypto Wallet Information..."

OWNER_PRINCIPAL=$( \dfx identity get-principal )
OWNER_PUBLIC_KEY="principal \"$OWNER_PRINCIPAL\""

# Check for empty principal before proceeding
if [ -z "$OWNER_PRINCIPAL" ]; then
    echo "ERROR: Principal ID is empty. Is 'dfx' running and an identity active?" >&2
    exit 1
fi

# Write Header
{
    echo "==========================================="
    echo " DFINITY Local Wallet and Canister Info"
    echo "==========================================="
    echo ""
} >> "$OUTPUT_FILE"

# --- 2. Write Owner Information ---
{
    echo "--- 🔑 Owner Principal Key ---"
    echo "$OWNER_PUBLIC_KEY"
    echo ""
} >> "$OUTPUT_FILE"

# --- 3. Get and Write Owner Balance ---
echo "--- 💰 Fetching Owner Balance..."
# dfx canister call is run here, and the output is appended to the file
BALANCE_OUTPUT=$(dfx canister call token_backend balanceOf "( $OWNER_PUBLIC_KEY )" 2>&1)
{
    echo "--- 💰 Owner Token Balance on 'token_backend' ---"
    echo "$BALANCE_OUTPUT"
    echo ""
} >> "$OUTPUT_FILE"

# --- 4. Get and Write Backend Canister ID ---
CANISTER_PRINCIPAL=$( \dfx canister id token_backend )
CANISTER_PUBLIC_KEY="principal \"$CANISTER_PRINCIPAL\""
{
    echo "--- ⚙️ Backend Canister ID ---"
    echo "$CANISTER_PUBLIC_KEY"
    echo "==========================================="
} >> "$OUTPUT_FILE"

echo "✅ All information has been saved to $OUTPUT_FILE"
echo ""
cat "$OUTPUT_FILE"