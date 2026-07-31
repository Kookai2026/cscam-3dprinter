# 📁 APP_CSCAM 폴더 맵

> 이 프로젝트의 모든 폴더가 **무엇을 위한 곳인지** 한눈에 보는 지도입니다.
> 파일을 어디에 둘지 헷갈리면 여기를 보세요.

```
APP_CSCAM/
│
├── README.md              프로젝트 소개 (제일 먼저 읽는 파일)
├── FOLDER_MAP.md          📍 지금 이 파일 — 폴더 지도
├── index.html             🔗 첫 접속 시 3dprinter/index.html로 자동 연결해 주는 리다이렉션 파일
├── .gitignore            git이 무시할 파일 목록 (임시파일 등)

│
├── docs/                 📄 프로젝트 문서 보관
│   └── 수정내역_v16.md      과거 수정 이력
│
├── shared/               🧩 사업부 "공통 컨셉" (모든 사이트가 함께 쓰는 것)
│   ├── css/                 공통 디자인 (색·글꼴·간격 규칙)
│   ├── js/                  공통 기능 스크립트
│   └── images/             공통 이미지 (회사 로고 등)
│                          ※ 지금은 비어 있음. Phase 1에서 채운다.
│
└── sites/                🌐 사업부별 사이트들이 사는 곳
    │
    ├── 3dprinter/          ✅ 금속 3D프린터 (첫 번째, 진행 중)
    │   ├── index.html         이 사이트의 메인 페이지
    │   ├── support.js         (현재 페이지 렌더용 — 나중에 정리 예정)
    │   ├── image-slot.js      (동상)
    │   ├── images/            이 사이트 사진
    │   └── uploads/           영상 등 큰 파일
    │
    ├── cnc/                ⬜ CNC 사업부 (예정 — 빈 골격)
    │   ├── index.html         "준비 중" 자리표시 페이지
    │   ├── images/
    │   └── uploads/
    │
    └── machine/           ⬜ 기계 사업부 (예정 — 빈 골격)
        ├── index.html         "준비 중" 자리표시 페이지
        ├── images/
        └── uploads/
```

## 🧭 규칙 (이것만 기억)

| 무엇을 넣나 | 어디에 |
|---|---|
| **모든 사이트가 공통으로** 쓰는 것 (로고·색·공통 부품) | `shared/` |
| **한 사업부에만** 해당하는 내용·사진 | `sites/<사업부>/` |
| 프로젝트 설명·이력 문서 | `docs/` |

## 🌐 나중에 배포되는 주소 (계획)
| 폴더 | 주소 |
|---|---|
| `sites/3dprinter/` | `3dprinter.cscam.co.kr` |
| `sites/cnc/` | `cnc.cscam.co.kr` |
| `sites/machine/` | `machine.cscam.co.kr` |

> 📚 자세한 배경·용어·결정은 vault: `_vault/20_Projects/CSCAM/홈페이지_교육/`
