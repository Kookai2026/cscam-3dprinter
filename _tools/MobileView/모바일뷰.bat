@echo off
chcp 65001 >nul
rem === MobileView: HTML 파일을 이 배치파일 위로 드래그하면 폰 화면으로 미리보기 ===
where py >nul 2>nul
if %errorlevel%==0 (
  py "%~dp0mobile_view.py" %*
) else (
  python "%~dp0mobile_view.py" %*
)
pause
