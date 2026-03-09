#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$ROOT_DIR/backend/FWCommunityHub.Api"
FRONTEND_DIR="$ROOT_DIR/frontend/fw-community-hub"

DOTNET_BIN=""
if command -v dotnet >/dev/null 2>&1; then
  DOTNET_BIN="dotnet"
elif [ -x "/c/Program Files/dotnet/dotnet.exe" ]; then
  DOTNET_BIN="/c/Program Files/dotnet/dotnet.exe"
elif [ -x "/c/Program Files (x86)/dotnet/dotnet.exe" ]; then
  DOTNET_BIN="/c/Program Files (x86)/dotnet/dotnet.exe"
else
  echo "Error: dotnet is not installed or not in PATH."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed or not in PATH."
  exit 1
fi

if [ ! -d "$BACKEND_DIR" ]; then
  echo "Error: backend directory not found: $BACKEND_DIR"
  exit 1
fi

if [ ! -d "$FRONTEND_DIR" ]; then
  echo "Error: frontend directory not found: $FRONTEND_DIR"
  exit 1
fi

echo "Starting backend at http://localhost:5000 ..."
(
  cd "$BACKEND_DIR"
  "$DOTNET_BIN" restore
  "$DOTNET_BIN" run
) &
BACKEND_PID=$!

cleanup() {
  echo ""
  echo "Stopping backend (PID: $BACKEND_PID) ..."
  kill "$BACKEND_PID" >/dev/null 2>&1 || true
}
trap cleanup EXIT INT TERM

if [ ! -d "$FRONTEND_DIR/node_modules" ]; then
  echo "Installing frontend dependencies (first run) ..."
  (cd "$FRONTEND_DIR" && npm install)
fi

echo "Starting frontend at http://localhost:4200 ..."
cd "$FRONTEND_DIR"
npm start
