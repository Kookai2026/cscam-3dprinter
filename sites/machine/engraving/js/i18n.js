(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  window.LANG = (lang === 'en') ? 'en' : 'ko';
  window.t = function (ko, en) { return window.LANG === 'en' ? (en || ko) : ko; };

  var textMap = {
    /* ── 접근성: aria-label / alt ── */
    '메뉴 열기': 'Open Menu',
    '메뉴 닫기': 'Close Menu',
    '다시 재생': 'Replay',
    '맨 위로': 'Back to top',
    'CSCAM MLP 1000-5A 레이저 잉그레이빙 머신 외관': 'CSCAM MLP 1000-5A Laser Engraving Machine Exterior',
    '연속파 레이저 딩플 형성 단면': 'CW Laser Dimple Formation Cross-section',
    '펄스 레이저 딩플 형성 단면': 'Pulsed Laser Dimple Formation Cross-section',
    '펄스 폭 스펙트럼 다이어그램: 나노·피코·팜토초': 'Pulse Width Spectrum Diagram: Nano, Pico, Femtosecond',
    '일반 패턴 상세': 'Standard Pattern Detail',
    '마이크로 패턴 상세': 'Micro Pattern Detail',
    '가공 디테일 대화면': 'Machining Detail Full View',
    '패턴가공 1': 'Pattern Machining 1',
    '패턴가공 1-2': 'Pattern Machining 1-2',
    '패턴가공 2': 'Pattern Machining 2',
    '패턴가공 3': 'Pattern Machining 3',
    '패턴가공 4': 'Pattern Machining 4',
    '패턴가공 5': 'Pattern Machining 5',
    'MLP 1000-5A 다중 배치 설치 전경': 'MLP 1000-5A Multiple Installation Overview',
    'MLP 1000-5A 장비 외관': 'MLP 1000-5A Machine Exterior',
    '5축 로터리 테이블 상세': '5-Axis Rotary Table Detail',
    '가공 소재 클로즈업': 'Machining Material Close-up',
    '국내 D사 실제 가동 현장 사진': 'Actual Production Site — Domestic Company D',
    '유럽 D사 실제 가동 현장 사진': 'Actual Production Site — European Company D',
    /* ── 본문 텍스트 ── */
    '레이저 스캐너와': 'A large-area, high-precision machining system',
    '레이저 스캐너와 CNC 제어를 완전 결합한 5축 대면적 고정밀 마이크로 패턴 가공기 MLP 1000-5A. 타이어 사이드 몰드 각인 최적화, 단차·이음매 없는 3D 마이크로 텍스처링. — CSCAM 기계사업부': 'MLP 1000-5A is a five-axis, large-area, high-precision micro-patterning system that fully integrates laser scanner and CNC control. Optimized for tire side mold engraving and seamless 3D micro-texturing. - CSCAM Machine Division',
    '레이저 스캐너 + CNC 결합 5축 대면적 마이크로 패턴 가공기. 타이어 몰드 각인 특화.': 'Five-axis large-area micro-patterning system combining laser scanner and CNC control. Specialized for tire mold engraving.',
    '가 결합된': 'integrating laser scanner and',
    '대면적 고정밀 가공 시스템': 'CNC control',
    '웹 브라우저가 비디오 태그를 지원하지 않습니다.': 'Your browser does not support the video tag.',
    'CSCAM은': 'CSCAM uses',
    '기술로 열 변형 없이 소재 표면에 정밀 미세 패턴을 구현합니다. 펄스 폭(Pulse Duration)에 따른 Nano·Pico·Femto초 레이저의 가공 특성을 최적화하여': 'technology to create precision micro-patterns on material surfaces without thermal deformation. By optimizing Nano, Pico, and Femto-second laser processing characteristics according to pulse duration, it achieves',
    '을 동시에 달성합니다.': 'at the same time.',
    '에너지를 연속적으로 조사하여 소재를': 'Continuously irradiates energy to',
    '하는 방식입니다. 열 영향부(HAZ)가 형성되어 미세 패터닝 시 열 변형 및 버(Burr)가 발생할 수 있습니다.': 'the material. A heat-affected zone (HAZ) can form, causing thermal deformation and burrs during micro-patterning.',
    '극소 시간 동안 첨단 에너지를 집속시켜 소재를': 'Focuses advanced energy for an extremely short time to',
    '시키는 방식입니다. 주변 소재로의 열 전도를 차단하여 왜곡 없는 완벽한 에지를 도출합니다.': 'the material. It blocks heat transfer to surrounding areas and creates clean, distortion-free edges.',
    '소재 제거율(Removal Rate)이 높아 가공 속도가 빠름. 미세한 열영향부(HAZ)가 존재하나 대용량 제거 및': 'High material removal rate enables fast processing. A small HAZ exists, but it is suitable for high-volume removal and',
    '에 적합.': 'applications.',
    '가공 효율과 정밀도의 균형점. 열 영향을 대폭 억제하면서 정밀한 표면 질감 구현 및': 'Balances processing efficiency and precision. It greatly suppresses thermal effects while enabling precise surface texture and',
    '에 적용.': 'applications.',
    '열 전달 시간보다 짧은 초단펄스로 "Cold Ablation" 구현. 열 왜곡 및 Burr가 전혀 없는': 'Implements cold ablation with ultrashort pulses shorter than the heat-transfer time, producing',
    '완성.': 'with no thermal distortion or burrs.',
    'CSCAM의 제어 시스템은 나노초(Nano) 및 펨토초(Femto) 펄스 폭 조절을 모두 지원하며, 본 장비(MLP 1000-5A)는': 'CSCAM control systems support both nanosecond and femtosecond pulse-width control, and the MLP 1000-5A precisely synchronizes',
    '와 5축 로터리 제어를 하드웨어 레이어에서 정밀히 정합하여 열영향부(HAZ) 왜곡이 거의 없는 완벽한 에지를 도출해 냅니다.': 'with 5-axis rotary control at the hardware layer to produce clean edges with minimal HAZ distortion.',
    '브랜드 시인성 50% 향상 솔루션': 'Solution for 50% higher brand visibility',
    '기존의 일반 가공 패턴은 금속 경계면의 난반사로 인해 로고나 정보 코드의 시인성이 크게 떨어집니다. CSCAM의 마이크로 패턴 텍스처링 공정은 빛의 각도를 인위적으로 차단하여 칠흑 같은 입체 구조를 생성함으로써, 일반 가공 대비': 'Conventional machined patterns often lose logo or information-code visibility because of diffuse reflection at metal boundaries. CSCAM micro-pattern texturing blocks light angles intentionally and creates a deep black three-dimensional structure, delivering',
    '을 제공합니다.': 'compared with conventional machining.',
    '국내외 글로벌 고객사에 적용되어 장비 품질 및 내구성이 확인되었습니다.': 'Applied by global customers in Korea and abroad, confirming equipment quality and durability.',
    '(유럽, 한국, 러시아, 중국, 필란드 등 수 백조 이상)': '(Hundreds of sets across Europe, Korea, Russia, China, Finland, and more)',
    '다운로드': 'Download',
    '기계사업부': 'Machine Division',
    '전남광주특별시 광산구 평동산단로 239-15': '239-15, Pyeongdongsandan-ro, Gwangsan-gu, Gwangju, Korea',
    '메시지를 입력하세요 (준비 중)': 'Enter your message (Coming soon)'
  };

  function applyAutoText(root) {
    if (window.LANG !== 'en') return;
    var scope = root || document.body;
    if (!scope) return;
    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent || /^(SCRIPT|STYLE|NOSCRIPT)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return /[가-힣]/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var raw = node.nodeValue;
      var trimmed = raw.trim();
      if (textMap[trimmed] !== undefined) node.nodeValue = raw.replace(trimmed, textMap[trimmed]);
    });
    ['placeholder', 'aria-label', 'title', 'content', 'alt'].forEach(function (attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        var value = el.getAttribute(attr);
        if (textMap[value] !== undefined) el.setAttribute(attr, textMap[value]);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // data-i18n-text 속성 처리: 텍스트 노드 교체
    document.querySelectorAll('[data-i18n-text]').forEach(function (el) {
      try {
        var translations = JSON.parse(el.getAttribute('data-i18n-text'));
        el.textContent = translations[window.LANG] || translations['ko'];
      } catch (e) {}
    });
    // data-i18n-html 속성 처리: innerHTML 교체
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      try {
        var translations = JSON.parse(el.getAttribute('data-i18n-html'));
        el.innerHTML = translations[window.LANG] || translations['ko'];
      } catch (e) {}
    });
    // 언어 스위처 활성화 상태 업데이트
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
