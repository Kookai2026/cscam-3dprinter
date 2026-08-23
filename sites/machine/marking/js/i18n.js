(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  window.LANG = (lang === 'en') ? 'en' : 'ko';
  window.t = function (ko, en) { return window.LANG === 'en' ? (en || ko) : ko; };

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
  });
})();
