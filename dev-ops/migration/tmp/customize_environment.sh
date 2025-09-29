#!/bin/bash

# This script is run automatically by Google Cloud Shell on startup.
# It ensures that essential development tools are available.

exec > /home/heldertoucas_ie/formacao-digital-2/dev-ops/logs/startup-script.log 2>&1
echo "--- Script started at $(date) ---"

# Source NVM to make node and npm available
echo "Sourcing NVM..."
if [ -s "/usr/local/nvm/nvm.sh" ]; then
  . "/usr/local/nvm/nvm.sh"
else
  echo "NVM script at /usr/local/nvm/nvm.sh not found. Cannot proceed."
  exit 1
fi

echo "NVM sourced successfully."

echo "Checking for pnpm..."
if ! command -v pnpm &> /dev/null
then
    echo "pnpm not found. Installing now..."
    # Now that NVM is sourced, npm should be available.
    if command -v npm &> /dev/null; then
      npm install -g pnpm
      echo "pnpm installed successfully."
    else
      echo "Error: npm command not found even after sourcing NVM."
    fi
else
    echo "pnpm is already installed."
fi

echo "Checking for Google Chrome..."
if ! command -v google-chrome &> /dev/null
then
    echo "Google Chrome not found. Installing now..."
    export DEBIAN_FRONTEND=noninteractive
    sudo apt-get update -y
    wget -O /tmp/google-chrome-stable_current_amd64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
    sudo apt install -y /tmp/google-chrome-stable_current_amd64.deb
    echo "Google Chrome installed successfully."
else
    echo "Google Chrome is already installed."
fi

echo "--- Script finished at $(date) ---"
