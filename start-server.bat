@echo off
title MiLife Medicity Local Server
cd /d "%~dp0"
echo ========================================================
echo   MiLife Medicity - Local Development Server
echo ========================================================
echo.
echo Server running at:
echo   Local:   http://localhost:8080/
echo   Arabic:  http://localhost:8080/index-ar.html
echo.
echo Press Ctrl+C anytime to stop.
echo ========================================================
echo.
start http://localhost:8080/
node server.js
pause
