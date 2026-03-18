#!/usr/bin/env bash
set -e

# CareConnect - Run Script
# Starts the backend (ASP.NET Core) and frontend (Angular) concurrently.

BACKEND_DIR="backend/CareConnect.Api"
FRONTEND_DIR="frontend/careconnect"

BACKEND_PID=""
FRONTEND_PID=""

cleanup() {
  echo ""
  echo "Shutting down..."
  [[ -n "$BACKEND_PID" ]] && kill "$BACKEND_PID" 2>/dev/null
  [[ -n "$FRONTEND_PID" ]] && kill "$FRONTEND_PID" 2>/dev/null
  wait 2>/dev/null
  echo "Done."
}
trap cleanup EXIT INT TERM

# ── Backend ──────────────────────────────────────────────────────────────────
echo "[backend] Restoring dependencies..."
(cd "$BACKEND_DIR" && dotnet restore --nologo -q)

echo "[backend] Starting on http://localhost:5000 ..."
(cd "$BACKEND_DIR" && dotnet run --no-restore) &
BACKEND_PID=$!

# ── Frontend ─────────────────────────────────────────────────────────────────
echo "[frontend] Installing dependencies..."
(cd "$FRONTEND_DIR" && npm install --silent)

echo "[frontend] Starting on http://localhost:4200 ..."
(cd "$FRONTEND_DIR" && npm start) &
FRONTEND_PID=$!

# ── Wait ─────────────────────────────────────────────────────────────────────
echo ""
echo "Both services are starting:"
echo "  Frontend → http://localhost:4200"
echo "  Backend  → http://localhost:5000  (Swagger: http://localhost:5000/swagger)"
echo ""
echo "Press Ctrl+C to stop."
echo ""

wait "$BACKEND_PID" "$FRONTEND_PID"
