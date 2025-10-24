#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "--- Owner Principal Key ---"


# The output is the raw Principal ID string.
OWNER_PUBLIC_KEY=$( \dfx identity get-principal )

echo "$OWNER_PUBLIC_KEY"

# Check if the Principal ID was successfully captured
if [ -z "$OWNER_PUBLIC_KEY" ]; then
    echo "ERROR: Principal ID is empty. Is 'dfx' running and an identity active?" >&2
    exit 1
fi


# Pass arguments to backend canister actor class
DFX_ARG="(\"$OWNER_PUBLIC_KEY\")"
echo "Deploying with Candid Argument: $DFX_ARG"

# Deploy the backend canister
dfx deploy token_backend --argument "$DFX_ARG"




echo "
# -------------------------------------------#
#                  SUCCESS                   #
# -------------------------------------------#"


echo "CANISTER DEPLYED!"