# CLAUDE.md — 이 저장소에서 작업할 때 지켜야 할 규칙

> 이 파일은 **AI 어시스턴트(Claude Code 등)가 자동으로 읽고 따르는 작업 지시서**입니다.
> 사람용 소개는 `README.md`, 폴더 안내는 `FOLDER_MAP.md`, 디자인 규칙은 `shared/DESIGN.md`.

## 프로젝트 개요
CSCAM 사업부별 홈페이지. `sites/<사업부>/`에 사업별 사이트, `shared/`에 공통 컨셉.
현재 작업 대상: `sites/3dprinter/index.html`. 정적 사이트(서버 없음), GitHub Pages 배포.

## 🔴 모바일 반응형 규칙 (가장 자주 깨지는 부분 — 반드시 지킬 것)
1. **모바일 스타일은 인라인이 아니라 `@media (max-width:992px)` 블록에서** 잡는다.
   인라인 `style`은 미디어 쿼리의 `!important`에 덮이므로, 인라인만 고치면 모바일에서 효과 없다.
2. **모든 다단 그리드는 모바일에서 1열로.** 2열 유지가 필요한 것(고객사 로고, 통계 2열, 공정단계)만 예외.
3. **`clamp()`의 최소값은 폰 기준**으로 정한다. PC 기준(예: 32px)이면 폰에서 안 줄어든다.
4. **고정 px 큰 글씨/번호**(전화번호 등)는 클래스로 잡아 모바일에서 축소한다.
5. **`section * { min-width: 0 }`** 를 유지한다. 안 하면 flex/grid 자식이 내용 때문에 칸보다 넓어져 삐져나간다.
6. **큰 간격(gap 24px+)의 가로 flex 레이아웃은 모바일에서 `flex-direction: column`으로 쌓는다.**
7. **인라인 스타일 띄어쓰기 주의**: 이 페이지는 `padding:44px`와 `padding: 44px`(공백)가 섞여 있다.
   속성 선택자(`[style*="..."]`)를 쓸 때는 **공백 있는/없는 버전 둘 다** 매칭해야 한다.
8. 변경 후 **반드시 390px 폰 뷰포트로 렌더링해 눈으로 확인**한다(가정 금지). 페이지 전체 가로 오버플로 = 0 이어야 한다.

## ✅ 작업 절차
- 파일 위치: 각 사이트는 `sites/<사업부>/`. 공통 부품은 `shared/`.
- **교육/작업 히스토리는 옵시디언 vault**(`V:\20_Projects\CSCAM\홈페이지`)에 기록한다. 코드 저장소엔 넣지 않는다(`_STUDY/`는 `.gitignore`됨).
- 커밋 메시지는 무엇을 왜 바꿨는지 한국어로 명확히.

## 🚀 배포
- 사업별로 **별도 GitHub 저장소** + GitHub Pages. 3D프린터 = `Kookai2026/cscam-3dprinter` (라이브: https://kookai2026.github.io/cscam-3dprinter/).
- 배포는 `git push` + Pages. 서버·빌드 없음.
- **주의**: 새 저장소로 배포할 때, 기존 원격과 히스토리가 다르면 push가 거부된다(unrelated histories) → 새 repo를 쓰거나 방식을 사령관과 협의.

## ⚠️ 하지 말 것
- 사령관 확인 없이 **force-push**나 원격 저장소 덮어쓰기 금지.
- `sites/3dprinter/`의 `support.js`/`image-slot.js`는 현재 페이지 렌더용 프레임워크 — 향후 정리 대상이나, 함부로 지우지 말 것.
