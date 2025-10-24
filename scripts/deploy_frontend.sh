#!/bin/bash

clear
# Exit immediately if a command exits with a non-zero status
set -e

# Deploy front-end
dfx deploy token_frontend

echo "
-------------------------------------------
|                 SUCCESS                 |
-------------------------------------------"