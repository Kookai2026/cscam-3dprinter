#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MobileView — HTML 파일을 폰 화면 크기로 미리보는 도구.

사용법:
  1) HTML 파일을 "모바일뷰.bat" (또는 이 .py) 위로 드래그&드롭
  2) 또는 터미널:  python mobile_view.py <파일.html>
  3) 인자 없이 실행하면 파일 선택창이 뜹니다.

원리: HTML 파일이 있는 폴더를 로컬 웹서버로 열고, 폰 크기(390px)
      iframe 안에 넣어 브라우저로 보여줍니다. iframe 폭이 곧 화면 폭이라
      실제 모바일 미디어쿼리(@media)가 그대로 작동합니다.
표준 라이브러리만 사용 — 추가 설치 불필요.
"""
import sys, os, html, socket, threading, time, webbrowser, urllib.parse
import http.server, socketserver
from pathlib import Path

PREVIEW_HTML = r"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>모바일 미리보기 — __TITLE__</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system,'Segoe UI','Noto Sans KR',sans-serif; background:#eef1f6;
         color:#1f2937; min-height:100vh; padding:22px 16px 48px;
         display:flex; flex-direction:column; align-items:center; }
  h1 { font-size:17px; font-weight:700; margin-bottom:3px; }
  p.sub { font-size:12.5px; color:#6b7280; margin-bottom:18px; text-align:center; }
  .controls { display:flex; gap:8px; margin-bottom:20px; flex-wrap:wrap; justify-content:center; }
  .controls button { font:inherit; font-size:13px; font-weight:600; padding:8px 16px;
      border-radius:20px; cursor:pointer; border:1px solid #cbd5e1; background:#fff; color:#334155; }
  .controls button.active { background:#1e5aa8; color:#fff; border-color:#1e5aa8; }
  .controls .reload { border-color:#94a3b8; }
  .phone { position:relative; border:12px solid #111827; border-radius:44px; background:#111827;
      box-shadow:0 24px 60px rgba(0,0,0,.28); transition:width .2s ease; }
  .phone::before { content:''; position:absolute; top:10px; left:50%; transform:translateX(-50%);
      width:42%; height:22px; background:#111827; border-radius:0 0 16px 16px; z-index:2; }
  .phone iframe { display:block; width:100%; height:812px; border:none; border-radius:32px; background:#fff; }
  .size-label { margin-top:12px; font-size:12px; color:#6b7280; }
  .hint { margin-top:22px; font-size:12px; color:#94a3b8; max-width:440px; text-align:center; line-height:1.6; }
</style>
</head>
<body>
  <h1>📱 모바일 미리보기</h1>
  <p class="sub">__TITLE__ &nbsp;·&nbsp; 실제 폰 화면과 동일하게 렌더링됩니다.</p>
  <div class="controls">
    <button data-w="360" onclick="setW(this)">360px</button>
    <button data-w="390" class="active" onclick="setW(this)">390px</button>
    <button data-w="414" onclick="setW(this)">414px</button>
    <button data-w="768" onclick="setW(this)">768px (태블릿)</button>
    <button class="reload" onclick="document.getElementById('frame').contentWindow.location.reload()">↻ 새로고침</button>
  </div>
  <div class="phone" id="phone" style="width:414px;">
    <iframe id="frame" src="__IFRAME_SRC__" title="미리보기"></iframe>
  </div>
  <div class="size-label" id="sizeLabel">화면 너비: 390px</div>
  <p class="hint">기기 폭을 바꿔가며 검토하세요. 파일을 수정한 뒤 <b>↻ 새로고침</b>을 누르면 반영됩니다.</p>
<script>
  function setW(btn){
    var w = parseInt(btn.dataset.w,10);
    document.getElementById('phone').style.width = (w+24)+'px';
    document.getElementById('sizeLabel').textContent = '화면 너비: '+w+'px';
    document.querySelectorAll('.controls button[data-w]').forEach(function(b){ b.classList.toggle('active', b===btn); });
  }
  setW(document.querySelector('.controls button[data-w="390"]'));
</script>
</body>
</html>
"""


def pick_file_dialog():
    """인자가 없을 때 파일 선택창(표준 tkinter)."""
    try:
        import tkinter as tk
        from tkinter import filedialog
        root = tk.Tk(); root.withdraw()
        path = filedialog.askopenfilename(
            title="모바일로 볼 HTML 파일 선택",
            filetypes=[("HTML 파일", "*.html *.htm"), ("모든 파일", "*.*")])
        root.destroy()
        return path
    except Exception:
        return ""


def free_port():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind(("127.0.0.1", 0))
    port = s.getsockname()[1]
    s.close()
    return port


def main():
    target = sys.argv[1] if len(sys.argv) > 1 else pick_file_dialog()
    if not target:
        print("사용법: HTML 파일을 이 프로그램(또는 모바일뷰.bat)에 드래그하세요.")
        print("       또는:  python mobile_view.py <파일.html>")
        input("\n엔터를 누르면 종료합니다...")
        return

    target = Path(target).expanduser().resolve()
    if not target.exists() or target.is_dir():
        print("HTML 파일을 찾을 수 없습니다:", target)
        input("\n엔터를 누르면 종료합니다...")
        return

    serve_dir = target.parent
    rel = urllib.parse.quote(target.name)          # 서버 루트 기준 경로
    iframe_src = "/" + rel
    page = (PREVIEW_HTML
            .replace("__IFRAME_SRC__", iframe_src)
            .replace("__TITLE__", html.escape(target.name)))
    page_bytes = page.encode("utf-8")

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *a, **k):
            super().__init__(*a, directory=str(serve_dir), **k)

        def do_GET(self):
            if self.path.split("?")[0] in ("/", "/__preview__"):
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(page_bytes)))
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(page_bytes)
                return
            return super().do_GET()

        def log_message(self, *a):
            pass  # 콘솔 조용히

    port = free_port()
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", port), Handler)
    httpd.daemon_threads = True
    url = "http://127.0.0.1:%d/__preview__" % port

    print("=" * 52)
    print(" 모바일 미리보기 실행 중")
    print(" 대상 파일 :", target)
    print(" 미리보기  :", url)
    print("=" * 52)
    print(" 브라우저가 자동으로 열립니다.")
    print(" 종료하려면 이 창에서 Ctrl+C (또는 창 닫기).")
    print()

    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    try:
        webbrowser.open(url)
    except Exception:
        print(" 브라우저 자동 실행 실패 — 위 주소를 직접 열어주세요.")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n종료합니다.")
        httpd.shutdown()


if __name__ == "__main__":
    main()
