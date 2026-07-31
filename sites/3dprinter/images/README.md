# 이미지 교체 가이드 — index.html

> 이미지 파일을 해당 폴더에 넣고, index.html에서 아래 라인을 수정하면 됩니다.  
> 교체 방법은 섹션마다 동일: **SVG placeholder 블록 삭제 → `<img>` 태그 삽입**

---

## 공통 교체 방법

```html
<!-- 이 블록 전체를 지우고 -->
<div class="anyx-img-ph">
  <svg ...></svg>
  MACHINE IMAGE
</div>

<!-- 아래 한 줄로 교체 -->
<img src="images/slm/anyx-250.jpg" alt="AnyX-250" style="width:100%;height:100%;object-fit:cover;">
```

---

## 히어로 배경 (`hero/`)

| 파일명 | 용도 | index.html 수정 위치 |
|---|---|---|
| `hero/hero-bg.jpg` | 히어로 전체 배경 (1920px 이상 권장) | **line 1697** — `url('images/hero-anyx250-lineup.jpg')` 부분의 파일명 변경 |

```html
<!-- line 1697 -->
<div class="hero-bg-photo" style="background-image: url('images/hero/hero-bg.jpg');"></div>
```

---

## 히어로 패밀리 슬라이드 (`hero/` 또는 `slm/`, `sla/`)

SLM/SLA 버튼을 누르면 나오는 우측 슬라이드. 현재는 SVG 실루엣.  
실제 라인업 사진을 넣으려면 `<svg>` 블록을 `<img>`로 통째로 교체합니다.

| 모델 | line | 현재 SVG 크기 참고 |
|---|---|---|
| AnyX-180 (SLM 슬라이드) | **1759** | 48×82 |
| AnyX-250 (SLM 슬라이드) | **1771** | 60×100 |
| AnyX-400 (SLM 슬라이드) | **1783** | 78×95 |
| AnyX-1000 (SLM 슬라이드) | **1795** | 116×80 |
| AnyX-SA100 (SLA 슬라이드) | **1821** | 42×115 |
| AnyX-SA300 (SLA 슬라이드) | **1832** | 56×140 |
| AnyX-SA800 (SLA 슬라이드) | **1843** | 78×128 |

> 패밀리 슬라이드 전체를 실사진 한 장으로 바꾸고 싶다면: `#slideSlm` / `#slideSla` div 안의 `.hero-family` 블록 전체를 `<img>` 한 장으로 교체 (line ~1750 / ~1812)

---

## SLM 제품 카드 (`slm/`)

| 파일명 | 모델 | index.html 수정 위치 |
|---|---|---|
| `slm/anyx-180.jpg` | AnyX-180 | **line 1982** — `<div class="anyx-img-ph">` 블록 교체 |
| `slm/anyx-250.jpg` | AnyX-250 | **line 2032** — 주석 처리된 `<img>` 태그 활성화 (line 2029 주석 해제) |
| `slm/anyx-400.jpg` | AnyX-400 | **line 2075** — `<div class="anyx-img-ph">` 블록 교체 |
| `slm/anyx-1000.jpg` | AnyX-1000 | **line 2118** — `<div class="anyx-img-ph">` 블록 교체 |

> AnyX-250은 이미 주석 처리된 img 태그가 준비되어 있습니다 (line 2029).  
> `<!--` `-->` 주석만 지우면 됩니다.

---

## SLA 제품 카드 (`sla/`)

| 파일명 | 모델 | index.html 수정 위치 |
|---|---|---|
| `sla/anyx-sa100.jpg` | AnyX-SA100 | **line 2383** — `<div class="anyx-img-ph">` 블록 교체 |
| `sla/anyx-sa300.jpg` | AnyX-SA300 | **line 2425** — `<div class="anyx-img-ph">` 블록 교체 |
| `sla/anyx-sa800.jpg` | AnyX-SA800 | **line 2468** — `<div class="anyx-img-ph">` 블록 교체 |

---

## 소프트웨어 (`software/`)

| 파일명 | 용도 | index.html 수정 위치 |
|---|---|---|
| `software/software-ui.jpg` | CS_Laser 3D UI 화면 | **line 2653** — 주석 처리된 `<img>` 태그 활성화, `<div class="sw-img-ph">` 블록 삭제 |

```html
<!-- line 2652~2664 — 아래처럼 교체 -->
<div class="sw-img-col">
  <img src="images/software/software-ui.jpg" alt="CS_Laser 3D UI" style="width:100%;height:100%;object-fit:cover;">
</div>
```

---

## 소재 (`materials/`)

| 파일명 | 용도 | index.html 수정 위치 |
|---|---|---|
| `materials/powder.jpg` | SLM 금속 분말 사진 | **line 2537** — `<div class="mat-v2-img-ph">` 블록 교체 |
| `materials/resin.jpg` | SLA 레진 사진 | **line 2573** — `<div class="mat-v2-img-ph sla">` 블록 교체 |

---

## 응용분야 (`applications/`)

파일명 규칙: `[분야]-[1 또는 2].jpg` — 타일당 상(1) · 하(2) 각 1장

| 분야 | 상단 이미지 line | 하단 이미지 line |
|---|---|---|
| Dental Parts | **2183** | **2186** |
| Power Turbine | **2200** | **2203** |
| Nuclear SMR | **2217** | **2220** |
| Tire Mold | **2234** | **2237** |
| Medical Implants | **2251** | **2254** |
| Defense | **2268** | **2271** |
| Oil & Gas | **2285** | **2288** |
| Electronics | **2302** | **2305** |
| Automotive | **2319** | **2322** |
| Aerospace | **2336** | **2339** |

교체 방법 — `<div class="app-img-slot">` 안의 `<svg>` 를 `<img>`로 교체:

```html
<div class="app-img-slot">
  <img src="images/applications/dental-1.jpg" alt="Dental Parts" style="width:100%;height:100%;object-fit:cover;">
</div>
```

---

## 설치사례 (`installations/`)

| 파일명 | 설치처 | index.html 수정 위치 |
|---|---|---|
| `installations/kyunghee.jpg` | 경희대학교 | **line 2689** — `<div class="case-photo">` 안 SVG 교체 |
| `installations/chosun.jpg` | 조선대·폴리텍 | **line 2706** |
| `installations/dynamic.jpg` | dynamic design | **line 2723** |
| `installations/lg.jpg` | LG전자 | **line 2739** |
| `installations/kaeri.jpg` | KAERI | **line 2756** |
| `installations/sla-case.jpg` | AnyX-SA 사례 (예정) | **line 2772** |

```html
<!-- SVG 전체 삭제 후 교체 -->
<div class="case-photo">
  <img src="images/installations/kyunghee.jpg" alt="경희대학교" style="width:100%;height:100%;object-fit:cover;">
</div>
```

---

## 고객사 로고 (`customers/`)

각 `.customer-logo` div 안에 `<img>` 추가 (텍스트 name div는 유지).

| 파일명 | 고객사 | index.html 수정 위치 |
|---|---|---|
| `customers/lg.png` | LG전자 | **line 2968** |
| `customers/kimm.png` | KIMM 한국기계연구원 | **line 2972** |
| `customers/kims.png` | KIMS 한국재료연구원 | **line 2976** |
| `customers/doosan.png` | DOOSAN | **line 2980** |
| `customers/dynamic.png` | dynamic design | **line 2984** |
| `customers/am-solutions.png` | AM Solutions | **line 2988** |
| `customers/kaeri.png` | KAERI | **line 2992** |
| `customers/arum.png` | ARUM DENTISTRY | **line 2996** |
| `customers/kyunghee.png` | 경희대학교 | **line 3000** |
| `customers/chosun.png` | 조선대학교 | **line 3004** |

```html
<!-- customer-logo div 안에 추가 (name div 위에) -->
<div class="customer-logo">
  <img src="images/customers/lg.png" alt="LG전자" style="max-width:80%;max-height:60%;object-fit:contain;">
  <div class="name">LG전자<small>생산기술원</small></div>
</div>
```

---

## 이미지 포맷 권장

| 용도 | 포맷 | 최소 크기 |
|---|---|---|
| 히어로 배경 | JPG | 1920 × 1080 |
| 제품 카드 | JPG | 800 × 600 |
| 응용분야 타일 | JPG | 600 × 450 |
| 설치사례 | JPG | 800 × 500 |
| 고객사 로고 | PNG (투명배경) | 400 × 200 |
| 소재 사진 | JPG | 400 × 400 |
