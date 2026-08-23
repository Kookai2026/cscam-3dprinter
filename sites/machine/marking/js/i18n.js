(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  window.LANG = (lang === 'en') ? 'en' : 'ko';
  window.t = function (ko, en) { return window.LANG === 'en' ? (en || ko) : ko; };

  var textMap = {
    'CSCAM - 문자마킹시스템': 'CSCAM - Marking System',
    '조선소 전처리': 'Shipyard Pretreatment',
    '아직도 수작업으로': 'Still marking',
    '강재 데이터를 마킹하고 있으신가요?': 'steel data by hand?',
    '수기 전사 공정에서 데이터 기반 자동 마킹으로': 'From manual transcription to data-driven automatic marking',
    '디자인 및 정보 운영부서와의 협업을 통해 도면 데이터를 마킹 데이터로 자동 변환하고, 실시간 마킹 상태 정보 확인부터 마킹 후 결과물 모니터링까지 이어지는': 'Drawing data is automatically converted into marking data through collaboration with design and information operation teams, connecting real-time marking status checks through post-marking result monitoring.',
    '입니다.': '',
    'SMART MARKING RESULT 01 · 강재 식별 정보 자동 마킹': 'SMART MARKING RESULT 01 · Automatic steel identification marking',
    'SMART MARKING RESULT 02 · 부재/강재 AR-CODE 자동 마킹': 'SMART MARKING RESULT 02 · Automatic member/steel AR-CODE marking',
    'SMART MARKING RESULT 03 · ARcode 마킹 적용': 'SMART MARKING RESULT 03 · ARcode marking application',
    'SMART MARKING RESULT 04 · QRcode 마킹 적용': 'SMART MARKING RESULT 04 · QRcode marking application',
    'MARKING MONITORING 01 · 현장 CCTV 기반 가동 상태 확인': 'MARKING MONITORING 01 · CCTV-based operation status monitoring',
    'MARKING MONITORING 02 · 마킹룸 실시간 작업 모니터링': 'MARKING MONITORING 02 · Real-time marking-room monitoring',
    '간단하고 편리함 (유지보수 인프라 최소화)': 'Simple and convenient (minimal maintenance infrastructure)',
    '0.282mm 도트 사이즈의 미세 제어로 바코드, AR-CODE 및 20mm 이하 소문자까지 판독 불량 없이 선명하게 각인합니다.': 'Fine 0.282 mm dot control produces clear barcodes, AR-CODEs, and small characters under 20 mm without readability defects.',
    '강한 휘발성의 MEK 유기용제 대신 오일계(OIL/UV) 잉크를 적용하여 유해가스 발생을 줄이고 야드의 가동 환경을 안정적으로 조율합니다.': 'Oil/UV ink is used instead of highly volatile MEK solvent, reducing harmful gas generation and improving yard operating conditions.',
    '고해상도 고정식 문자마킹 시스템': 'High-Resolution Stationary Marking System',
    '갠트리 프레임 전체에 마킹 헤드를 배열하여 강재 플레이트 폭 전체(최대 5,000mm)를 한 번에 커버합니다. 부재 식별용 글자와 가공/소부재 선까지 자동 분할 표기하는 최상위 시스템입니다.': 'Marking heads are arranged across the gantry frame to cover the full steel-plate width up to 5,000 mm in one pass. This top-tier system automatically segments and marks member IDs, processing lines, and sub-member guide lines.',
    '마킹 헤드 수': 'Number of Marking Heads',
    '17세트 (피에조 노즐단 총 68개)': '17 sets (68 piezo nozzle units total)',
    '강재 전처리 ID 마킹': 'Steel pretreatment ID marking',
    '절단/소부재 가이드라인 자동 각인': 'Automatic cutting/sub-member guideline marking',
    '[전체 마킹기] 현장 운용 실사': '[Full Surface Type] On-site operation photo',
    'ID 마킹기 (Central ID Type)': 'ID Marking Machine (Central ID Type)',
    '강재 플레이트의 중앙 또는 지정된 일부 라인(유효폭 1,120mm, 협의 가능)에 핵심 식별 ID 문자 및 2D 코드를 마킹합니다. 실리적이며 필수 품질 식별을 신속히 수행하는 콤팩트 시스템입니다.': 'Marks key ID characters and 2D codes at the center or selected lines of a steel plate, with an effective width of 1,120 mm or negotiable. A compact system for fast essential quality identification.',
    '4세트 (피에조 노즐단 총 16개)': '4 sets (16 piezo nozzle units total)',
    '강재 중심 식별용 관리 번호': 'Management number for central steel identification',
    '2D Matrix Code 마킹 전용': 'Dedicated to 2D Matrix Code marking',
    '[ID 마킹기] 현장 운용 실사': '[ID Type] On-site operation photo',
    '메인 공급 전원': 'Main Power Supply',
    '220V 3상 50/60Hz, 50KVA': '220V 3-phase 50/60Hz, 50KVA',
    '메인 공급 공압': 'Main Air Supply',
    'Normal 5 ~ 6 bar 상시 공급': 'Normal 5-6 bar continuous supply',
    '강재 대응 두께 범위': 'Supported Steel Thickness Range',
    '마킹 엔진 헤드 구성': 'Marking Engine Head Configuration',
    '근접 센서, 정밀 엔코더, 초음파 두께 측정 및 레이저 각도 센서 연동': 'Integrated proximity sensor, precision encoder, ultrasonic thickness measurement, and laser angle sensor',
    '고정식 시스템 현장 가동 및 야드 실증 결과': 'Stationary System Operation and Yard Demonstration Results',
    '강재 표면의 문자와 기호가 현장 식별에 필요한 선명도를 유지합니다.': 'Characters and symbols on steel surfaces remain clear enough for field identification.',
    '마킹 후 강재 적치 조건에서도 번짐과 손상 없이 식별 정보를 유지합니다.': 'Identification marks remain readable without smearing or damage even after steel stacking.',
    '갠트리 레일 위를 자동 주행하며 대형 주판(Panel) 위에 조립 유도선, 용접·가이드 경계선, 부재 식별 문자, 스마트 조립 스캔용 AR-CODE/QR-CODE를 고속 인쇄하는 이동형 Gantry 마킹 시스템입니다.': 'A mobile gantry marking system that travels automatically on rails and prints assembly guide lines, welding/boundary guide lines, member IDs, and AR-CODE/QR-CODE marks for smart assembly scanning on large panels.',
    '✔ 대면적 자동 주행 제어': 'Automatic large-area travel control',
    '✔ 복합 라인 & 문자 인쇄': 'Combined line and character printing',
    '✔ 지능형 스마트 코드 지원': 'Smart code support',
    '대표 구축 사이트': 'Representative Installation Sites',
    '[판넬 이동형 마킹기] 가동 실증 A': '[Mobile Panel Marking Machine] Operation demonstration A',
    '[판넬 이동형 마킹기] 가동 실증 B': '[Mobile Panel Marking Machine] Operation demonstration B',
    '대형 주판 위를 주행하며 조립 기준선, 부재 식별 정보, 스마트 코드 마킹을 자동 수행한 판넬라인 실증 결과입니다.': 'Panel-line demonstration results showing automatic assembly reference lines, member identification, and smart-code marking while traveling over a large panel.',
    '대형 주판 위 조립 기준 정보와 현장 식별 마킹을 자동 표기합니다.': 'Automatically marks assembly reference information and field identification data on large panels.',
    '가이드 라인과 부재 식별 정보를 판넬 작업 영역에 정밀하게 구현합니다.': 'Precisely prints guide lines and member identification data across the panel work area.',
    '국내외 주요 조선소 납품 및 가동 실적': 'Supply and Operation Record at Major Shipyards',
    'HD현대중공업 (군산)': 'HD Hyundai Heavy Industries (Gunsan)',
    '도입 장비 구분': 'Installed System Type',
    '가동 현황 및 비고': 'Operation Status and Notes',
    '2025년': '2025',
    '2024년': '2024',
    '2023년': '2023',
    '2022년': '2022',
    '2021년': '2021',
    '2019년': '2019',
    '2018년': '2018',
    '2016년': '2016',
    '2012년': '2012',
    '1호기': 'Unit 1',
    '2호기': 'Unit 2',
    '3호기': 'Unit 3',
    '4호기': 'Unit 4',
    '1야드 1호기': 'Yard 1 Unit 1',
    '1야드 3호기': 'Yard 1 Unit 3',
    '1야드 4호기': 'Yard 1 Unit 4',
    '2야드 1호기': 'Yard 2 Unit 1',
    '2야드 2호기': 'Yard 2 Unit 2',
    '판넬라인': 'Panel Line',
    '고해상도 전처리 문자마킹기 SET': 'High-Resolution Pretreatment Character Marking Machine Set',
    '고해상도 전처리 ID 마킹기 SET': 'High-Resolution Pretreatment ID Marking Machine Set',
    '군산 재가동 생산 라인 배치 가동': 'Operating on the restarted Gunsan production line',
    '그 외 조선 전처리 문자마킹장비': 'Additional shipbuilding pretreatment marking equipment',
    '및': 'and',
    '리트로핏(Retrofit) 개조': 'retrofit modifications',
    '실적 다수 보유': 'completed in multiple projects',
    '광주광역시 광산구 평동산단로 239-15 (옥동)': '239-15, Pyeongdongsandan-ro, Gwangsan-gu, Gwangju, Korea',
    '기술영업 대표전화': 'Technical Sales Phone',
    '기술영업 담당 이메일': 'Technical Sales Email',
    '담당자 성함 / 회사명': 'Name / Company',
    '고정식 전체 마킹기': 'Stationary Full Surface Marking Machine',
    '고정식 ID 마킹기': 'Stationary ID Marking Machine',
    '기술자료': 'Technical Resources',
    'Piezo 압전 잉크젯 제어': 'Piezo Inkjet Control',
    '기계 & 전기 유틸리티 제원': 'Mechanical & Electrical Utility Specifications',
    '납품 설치 실적': 'Supply and Installation Record',
    'CSCAM 문의하기': 'Contact CSCAM',
    'MARKING MACHINE 상담 챗봇': 'MARKING MACHINE Consultation Chatbot',
    '님!': '',
    '메시지를 입력하세요 (준비 중)': 'Enter your message (Coming soon)',
    '성함과 소속 회사명을 함께 적어주세요': 'Enter your name and company',
    '연락받으실 연락처를 입력해 주세요': 'Enter your preferred contact information',
    '도입 검토 중인 장비 구분(고정식/이동식), 주요 강재 사양 등을 편하게 기재해 주세요': 'Enter the system type under review (stationary/mobile), steel specifications, and other requirements'
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
    applyAutoText(document.body);
    if (window.LANG === 'en') {
      new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) applyAutoText(node);
          });
        });
      }).observe(document.body, { childList: true, subtree: true });
    }
  });
})();
