#!/usr/bin/env bash
set -euo pipefail

FRONTEND_DIR="frontend/careconnect"

if [[ ! -d "$FRONTEND_DIR" ]]; then
  echo "[frontend] Directory not found: $FRONTEND_DIR" >&2
  exit 1
fi

cd "$FRONTEND_DIR"

if [[ ! -d "node_modules" ]]; then
  echo "[frontend] Installing dependencies..."
  npm install
fi

echo "[frontend] Starting Angular app on http://localhost:4200 ..."
npm start
