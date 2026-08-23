(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  window.LANG = (lang === 'en') ? 'en' : 'ko';
  window.t = function (ko, en) { return window.LANG === 'en' ? (en || ko) : ko; };

  function applyI18n() {
    document.querySelectorAll('[data-i18n-text]').forEach(function (el) {
      try {
        var tr = JSON.parse(el.getAttribute('data-i18n-text'));
        el.textContent = tr[window.LANG] || tr['ko'];
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
  }

  // React가 비동기 렌더링하므로 즉시 + 렌더 완료 후 재시도
  document.addEventListener('DOMContentLoaded', function () {
    applyI18n();
    setTimeout(applyI18n, 150);
    setTimeout(applyI18n, 500);
  });
})();
