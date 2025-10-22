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

# FIX 2: Correct Candid Argument Formatting
# Motoko expects Text ("<principal_id>"). This requires internal double quotes.
DFX_ARG="(\"$OWNER_PUBLIC_KEY\")"

echo "Deploying with Candid Argument: $DFX_ARG"

# Deploy the canister using the correctly formatted argument
# Added standard flags for robust upgrade/persistence handling
dfx deploy token_backend --argument "$DFX_ARG"

echo "Deployment successful for token_backend!"