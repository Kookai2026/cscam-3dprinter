(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  window.LANG = (lang === 'en') ? 'en' : 'ko';
  window.t = function (ko, en) { return window.LANG === 'en' ? (en || ko) : ko; };

  var textMap = {
    'CSCAM 기계사업부': 'CSCAM Machine Division',
    '금속 분말을 고정밀 파이버 레이저로 녹여 층층이 쌓아 올려, 전통적인 절삭 가공으로는 구현하기 어려운 복잡한 내부 중공 구조나 냉각 유로를 지닌 부품을 처음부터 일체형으로 구현하는': 'Metal powder is melted with a high-precision fiber laser and built layer by layer to produce integrated parts with complex internal cavities or cooling channels that are difficult to machine conventionally.',
    '금속 3D 프린팅(PBF)': 'metal 3D printing (PBF)',
    '라인업입니다. 씨에스캠만의 독자적인 레이저 제어 기술과 실시간 모니터링 시스템을 통해 소형 덴탈 의료 정밀 부품부터 대형 산업 발전 및 원자력 발전용 부품까지 최고 등급의 상대밀도와 신뢰성 있는 인장강도를 확보하며, 장비 크기별 최적화된 4종(AnyX-M180, M250, M400, M1000)의 고성능 금속 적층 제조 라인업을 제공하고 있습니다.': 'lineup. CSCAM combines proprietary laser control technology with real-time monitoring to secure high relative density and reliable tensile strength, from compact dental and medical precision parts to large industrial, power-generation, and nuclear components. Four optimized models are available: AnyX-M180, M250, M400, and M1000.',
    'SLM(AnyX) 자세히 보기 →': 'Learn more about SLM (AnyX) →',
    '액체 상태의 광경화성 에폭시/아크릴 수지에 고정밀 UV 자외선 레이저를 조사하여 순간적으로 경화시켜 형상을 제조하는': 'A lineup that forms parts by applying a high-precision UV laser to liquid photosensitive epoxy/acrylic resin, curing it instantly.',
    '광경화 적층 방식(Stereolithography, SLA)': 'stereolithography (SLA)',
    '라인업입니다. 레이저 가공 분야에서 축적된 미세 스캔 제어 노하우를 접목하여 극도로 매끄러운 조도와 정밀한 치수 공차를 달성할 수 있어 정밀 덴탈 모델, 복잡한 주얼리 마스터 원형, 정밀 주조용 패턴(캐스터블 레진) 제작에 특화되어 있습니다. 소형 정밀형부터 대형 산업용 장비인 AnyX-S150, S300, S600 3가지 기종을 통해 부품 시제품부터 대형 하우징 모크업까지 폭넓은 산업군에 고속 정밀 제조 솔루션을 제안합니다.': 'By applying fine scan-control know-how accumulated in laser processing, it achieves extremely smooth surface finish and precise dimensional tolerance. It is suited for dental models, complex jewelry master patterns, and investment-casting patterns using castable resin. The AnyX-S150, S300, and S600 support applications from small precision prototypes to large housing mockups.',
    'SLA(AnyX-S) 자세히 보기 →': 'Learn more about SLA (AnyX-S) →',
    '02-1 / SLM — 라인업 소개': '02-1 / SLM — Lineup Overview',
    '혁신적인 SLM 금속 3D 프린터': 'Innovative SLM Metal 3D Printers',
    '최적의 메탈 3D 프린터 솔루션을 제공합니다': 'Optimized metal 3D printer solutions',
    'SLM(Selective Laser Melting) 방식의 소형부터 초대형까지, 4가지 라인업의 AnyX 시리즈로 고객의 다양한 요구를 충족하는 최적의 금속 3D 프린터 솔루션을 제공합니다.': 'The AnyX Series provides four SLM (Selective Laser Melting) metal 3D printer models, from compact to extra-large, to meet a wide range of customer requirements.',
    'CW(연속발진) 파이버 레이저로 금속 분말을 선택적으로 용융시켜 정밀한 3차원 형상을 처음부터 쌓아 올리는': 'It selectively melts metal powder with a CW fiber laser to build precise three-dimensional forms layer by layer.',
    '적층 제조(Additive Manufacturing)': 'additive manufacturing',
    '전용 장비입니다.': 'equipment.',
    '는 정밀 레이저를 탑재한': 'is a',
    '타입의 금속 3D 프린터로, 소형 마이크로 부품부터 초대형 우주항공 부품까지 폭넓게 제작 가능한 최적의 산업용 라인업을 제공합니다.': 'metal 3D printer equipped with precision lasers, offering an industrial lineup capable of producing everything from micro parts to extra-large aerospace components.',
    '02-2 / SLM — 개별 스펙': '02-2 / SLM — Individual Specifications',
    'AnyX-M Series 제품 라인업': 'AnyX-M Series Product Lineup',
    '장비사양': 'Specifications',
    '다운로드': 'Download',
    '문의하기': 'Contact',
    '{{ activeSpecProduct.name }} 스펙 시트': '{{ activeSpecProduct.name }} Specification Sheet',
    '상담 및 견적 문의': 'Consultation & Quote',
    '닫기': 'Close',
    '2025년 실증선박 탑재 시연완료': 'Demonstrated aboard a test vessel in 2025',
    '02-2b / SLM — 컨테이너형 이동식 SLM': '02-2b / SLM — Containerized Mobile SLM',
    '40ft 해상 컨테이너 안에 AnyX 계열 SLM 장비와 분말 취급·후처리 설비를 일체화한': 'A 40-ft marine container integrates an AnyX SLM system with powder handling and post-processing equipment as a',
    '이동식 금속 3D프린팅 올인원 워크샵': 'mobile all-in-one metal 3D printing workshop',
    '입니다. 특히 선박 운항 중 가해지는': '. In particular, it includes',
    '진동, 파고, 선체 흔들림(롤링) 등 격렬한 외란을 극복하는 능동형 상쇄 시스템': 'an active compensation system that handles severe disturbances such as vibration, waves, and vessel rolling',
    '과': 'and',
    '철저한 밀폐식 항온·항습 설비': 'sealed temperature and humidity control',
    '가 내장되어 있어, 실제 해상 환경에서도 육지와 다름없는 우수한 정밀도의 금속 부품을 즉시 생산(MRO)할 수 있도록 실증 검증되었습니다.': ', enabling verified production of precision metal parts for MRO even in actual marine environments.',
    'ANTI-ROLLING (롤링 상쇄)': 'ANTI-ROLLING',
    '상쇄율 99.70%': '99.70% compensation',
    '(보정각 ±8°)': '(correction angle ±8°)',
    'ANTI-VIBRATION (진동 감쇄)': 'ANTI-VIBRATION',
    '감쇄율 84.77%': '84.77% reduction',
    '(6자유도 검증)': '(6-DOF verified)',
    '4단계 자동 온·습도': '4-stage automatic temperature/humidity',
    'N₂ 제어': 'N₂ control',
    '선급 Stage 2 인증': 'Class Stage 2 certification',
    '소화 시스템': 'fire suppression system',
    '※ HD현대삼호중공업 8223호선(HMM GREEN)에 실제 탑재 및 해상 조형 실증 완료 (물성치 확보)': 'Verified aboard HD Hyundai Samho Heavy Industries hull 8223 (HMM GREEN), with marine printing demonstration and material-property data secured.',
    '내부 설비 구성 — 3DP 메인장치 · 모니터링장치 · 후처리장치': 'Internal Layout — 3DP Main Unit · Monitoring Unit · Post-processing Unit',
    '컨테이너 구동 영상 재생': 'Play container operation video',
    '도면 레이아웃 보기': 'View layout drawing',
    '※ 로컬 브라우저 보안(file://)으로 영상이 재생되지 않는 경우:': 'If the video does not play because of local browser security (file://):',
    '[여기(새 창)를 눌러 영상 직접 열기]': '[Open the video directly in a new window]',
    '공동연구개발 및 실증 협력 기관': 'Joint R&D and Demonstration Partners',
    '02-3 / SLM — 파우더 소재': '02-3 / SLM — Powder Materials',
    '검증된 금속 분말과 정밀 관리 시스템': 'Verified Metal Powders and Precision Management',
    '씨에스캠은 대표적으로 Sandvik社의 Osprey® 가스분무(Gas Atomized) 금속 분말을 취급하며, 구형도(Sphericity)와 유동성이 우수해 정밀 레이저 용융(SLM) 공정에 최적화되어 있습니다. 이 외에도 항공·의료·발전 등 산업별로 요구되는 물성에 맞춰 자체 검증을 마친 다양한 소재 옵션을 보유하고 있어, 상담을 통해 부품 사양에 맞는 최적의 소재와 공정 조건을 함께 제안해 드립니다.': 'CSCAM handles Sandvik Osprey® gas-atomized metal powders, which offer excellent sphericity and flowability for precision SLM processing. We also maintain internally verified material options for aerospace, medical, power-generation, and other industries, and recommend suitable materials and process conditions for each part specification.',
    '분말 관리': 'Powder',
    '취급 시스템': 'Handling System',
    'POWDER HANDLING · 전 모델 공통 적용': 'POWDER HANDLING · STANDARD ACROSS ALL MODELS',
    '02-4 / SLM — 응용 분야': '02-4 / SLM — Applications',
    'AnyX-M Series 응용 분야': 'AnyX-M Series Applications',
    '본 응용 출력물들은 실제 AnyX-M Series를 통해 제작되었습니다': 'These application samples were produced with the AnyX-M Series.',
    '02-5 / SLM — 설치사례': '02-5 / SLM — Installations',
    'SLM 설치 및 가동 현장': 'SLM Installation and Operation Sites',
    '02-6 / SLM — 브랜드 스토리': '02-6 / SLM — Brand Story',
    '10년 이상의 레이저 제어 기술이': 'More than 10 years of laser-control technology',
    'AnyX-M Series에 담겨 있습니다': 'are built into the AnyX-M Series',
    '씨에스캠은 레이저 가공 장비 개발 경험을 바탕으로 SLM 방식 금속 3D 프린터의 광학계·제어 소프트웨어를 자체 설계했습니다. 경희대학교·조선대학교 등 교육기관부터 LG전자·한국원자력연구원 등 산업·연구 현장까지, AnyX-M Series는 실제 가동 현장에서 검증되고 있습니다.': 'Based on experience developing laser-processing equipment, CSCAM designs the optics and control software for SLM metal 3D printers in-house. The AnyX-M Series is proven in real operating environments, from universities such as Kyung Hee University and Chosun University to industrial and research sites including LG Electronics and KAERI.',
    '02-7 / SLM — 자료 다운로드': '02-7 / SLM — Downloads',
    '03 / SLA — 라인업 소개': '03 / SLA — Lineup Overview',
    'SLA 광경화 3D 프린터': 'SLA Photopolymerization 3D Printers',
    '[ AnyX-S Series ] 데이터 준비 및 업데이트 대기 중': '[ AnyX-S Series ] Data preparation and update pending',
    '국내 자체개발': 'In-house developed',
    '컨트롤 소프트웨어': 'control software',
    'SLM(AnyX)과 SLA(AnyX-S) 전 라인업이 하나의': 'The full SLM (AnyX) and SLA (AnyX-S) lineups are driven by one',
    '씨에스캠 자체개발 소프트웨어': 'CSCAM in-house software platform',
    '로 구동됩니다.': '.',
    '"AnyX 전 라인업 전용 CAM 시스템"': '"Dedicated CAM system for the full AnyX lineup"',
    'AnyX-M Series(SLM)와 AnyX-S Series(SLA)의 조형 데이터 생성, 슬라이싱, 마킹을 하나로 처리하는 씨에스캠 전용 CAM 소프트웨어입니다.': 'CSCAM dedicated CAM software handles build-data generation, slicing, and marking for both AnyX-M Series (SLM) and AnyX-S Series (SLA).',
    'CS_Laser 3D 매뉴얼 · PDF': 'CS_Laser 3D Manual · PDF',
    '비전문가 운용을 위한 7단계 공정 절차': '7-step process workflow for non-specialist operation',
    '05 / 주요 고객': '05 / Customers',
    '3D 프린터 주요 고객': 'Major 3D Printer Customers',
    '국내 유수의': 'Leading Korean',
    '대기업, 국책 연구기관, 대학교': 'corporations, national research institutes, and universities',
    '가 씨에스캠 3D 프린터를 도입해 연구·개발·양산 현장에서 활용하고 있습니다.': 'use CSCAM 3D printers for research, development, and production.',
    '제품(견적) 문의처 및 사업부 위치': 'Product Inquiries, Quotes, and Division Location',
    '3D 프린터 사업부': '3D Printer Division',
    'Customer Center · 고객센터': 'Customer Center',
    '상담 전화': 'Consultation Phone',
    '상담 시간': 'Business Hours',
    '오전 08:30 ~ 오후 05:30': '08:30 AM ~ 05:30 PM',
    '본사 (전남광주특별시)': 'Headquarters (Gwangju, Korea)',
    '전남광주특별시 광산구 평동산단로 239-15': '239-15, Pyeongdongsandan-ro, Gwangsan-gu, Gwangju, Korea',
    '씨에스캠주식회사': 'CSCAM Co., Ltd.',
    '레이저 제어 기술 기반의 SLM 금속 3D 프린터(AnyX-M Series)와 SLA 광경화 3D 프린터(AnyX-S Series)를 자체 개발·공급합니다.': 'We develop and supply SLM metal 3D printers (AnyX-M Series) and SLA photopolymerization 3D printers (AnyX-S Series) based on laser control technology.',
    '기술자료': 'Technical Resources',
    'SLM 응용분야 · 소재': 'SLM Applications · Materials',
    'SLA 응용분야 · 레진': 'SLA Applications · Resins',
    '홍보자료': 'Promotional Resources',
    '설치사례': 'Installations',
    '주요 고객': 'Customers',
    '제품(견적) 문의': 'Product Inquiry / Quote',
    '© 2026 씨에스캠주식회사 (CSCAM Co., Ltd.) — 3D Printer Division. All Rights Reserved.': '© 2026 CSCAM Co., Ltd. — 3D Printer Division. All Rights Reserved.',
    '본사 · 전남광주특별시 광산구 평동산단로 239-15 · 062-946-1900': 'HQ · 239-15, Pyeongdongsandan-ro, Gwangsan-gu, Gwangju, Korea · +82-62-946-1900',
    'CSCAM 문의하기': 'Contact CSCAM',
    '3D PRINTER 상담 챗봇': '3D PRINTER Consultation Chatbot',
    '입력 중': 'Typing',
    '안녕하세요! 씨에스캠 3D 프린터 상담 챗봇입니다.': 'Hello! This is the CSCAM 3D Printer consultation chatbot.',
    '아래 항목을 선택하거나 궁금하신 점을 입력해 주세요.': 'Select an option below or enter your question.',
    'AnyX-M Series(SLM) 스펙이 궁금해요': 'Ask about AnyX-M Series (SLM) specs',
    'AnyX-S Series 문의': 'Ask about AnyX-S Series',
    '담당자 연결 (062-946-1900)': 'Connect to a representative (+82-62-946-1900)',
    '선택해 주셔서 감사합니다! 상세 자료 송부 및 정확한 기술 상담을 도와드리기 위해 먼저 고객님의': 'Thank you for your selection. To send detailed materials and provide accurate technical consultation, please first enter your',
    '성함(회사명)': 'name (company name)',
    '을 아래 입력창에 작성해 주세요.': 'in the input box below.',
    '성함 또는 회사명을 입력하세요...': 'Enter your name or company name...',
    '전화번호 또는 이메일을 입력하세요...': 'Enter your phone number or email...',
    '상세 요구사항을 입력하세요...': 'Enter detailed requirements...',
    '메시지를 입력하세요 (준비 중)': 'Enter your message (Coming soon)',
    '접수가 성공적으로 완료되었습니다.': 'Submission completed successfully.',
    '처음 단계로 돌아가기': 'Back to the beginning'
  };

  var attrMap = {
    '국내 최대 산업용 SLM 3D프린터 라인업 및 선박용 컨테이너형 적층제조 실증사례.': 'Korea-focused industrial SLM 3D printer lineup and shipboard containerized additive manufacturing demonstration cases.',
    'SLM 조형 과정 구동': 'SLM build process animation',
    'SLA 조형 과정 구동': 'SLA build process animation',
    '선박 탑재 컨테이너형 3DP 실사진': 'Actual shipboard containerized 3DP photo',
    '컨테이너 내부 설비 구성도': 'Container internal equipment layout',
    '공동연구개발 및 실증 협력 기관': 'Joint R&D and demonstration partners',
    'CS_Laser 3D 소프트웨어': 'CS_Laser 3D software',
    'CS_Laser 3D 소프트웨어 UI 화면': 'CS_Laser 3D software UI screen',
    '씨에스캠 본사 위치': 'CSCAM headquarters location',
    '맨 위로': 'Back to top',
    '메시지를 입력하세요 (준비 중)': 'Enter your message (Coming soon)'
  };

  function replacePreservingSpace(node, next) {
    var raw = node.nodeValue;
    var trimmed = raw.trim();
    if (!trimmed || !textMap[trimmed]) return;
    node.nodeValue = raw.replace(trimmed, textMap[trimmed]);
  }

  function applyAutoText(root) {
    if (window.LANG !== 'en') return;
    var scope = root || document.body;
    if (!scope) return;

    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|NOSCRIPT)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return /[가-힣]/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replacePreservingSpace);

    Object.keys(attrMap).forEach(function (ko) {
      document.querySelectorAll('[content="' + ko.replace(/"/g, '\\"') + '"],[alt="' + ko.replace(/"/g, '\\"') + '"],[placeholder="' + ko.replace(/"/g, '\\"') + '"],[aria-label="' + ko.replace(/"/g, '\\"') + '"],[title="' + ko.replace(/"/g, '\\"') + '"]').forEach(function (el) {
        ['content', 'alt', 'placeholder', 'aria-label', 'title'].forEach(function (attr) {
          if (el.getAttribute(attr) === ko) el.setAttribute(attr, attrMap[ko]);
        });
      });
    });

    var historyNotice = Array.prototype.find.call(document.querySelectorAll('section div'), function (el) {
      return el.textContent.trim() === '※ 이 사이트는 게시용 페이지가 아닙니다.';
    });
    if (historyNotice) {
      var section = historyNotice.closest('section');
      if (section) section.style.display = 'none';
    }
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n-text]').forEach(function (el) {
      try {
        var tr = JSON.parse(el.getAttribute('data-i18n-text'));
        var value = tr[window.LANG] || tr['ko'];
        var leadingDecor = el.firstElementChild && !el.firstElementChild.textContent.trim()
          ? el.firstElementChild.cloneNode(true)
          : null;
        el.textContent = '';
        if (leadingDecor) el.appendChild(leadingDecor);
        String(value).split('\n').forEach(function (part, index) {
          if (index > 0) el.appendChild(document.createElement('br'));
          el.appendChild(document.createTextNode(part));
        });
      } catch (e) {}
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      if (btn.dataset.lang === window.LANG) {
        btn.style.color = '#1e5aa8';
        btn.style.fontWeight = '700';
      } else {
        btn.style.color = '#757575';
        btn.style.fontWeight = '400';
      }
    });
    applyAutoText(document.documentElement);
  }

  // support.js 비동기 렌더링 대응: 즉시 + 단계적 재시도
  document.addEventListener('DOMContentLoaded', function () {
    applyI18n();
    setTimeout(applyI18n, 150);
    setTimeout(applyI18n, 500);
    setTimeout(applyI18n, 1200);
    if (window.LANG === 'en') {
      new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) applyAutoText(node);
          });
        });
      }).observe(document.documentElement, { childList: true, subtree: true });
    }
  });
})();
