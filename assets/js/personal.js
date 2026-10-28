(() => {
  const button = document.querySelector('.language-toggle');
  function setLanguage(language) {
    document.documentElement.lang = language;
    button.textContent = language === 'en' ? '中文' : 'English';
    button.setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
    try { localStorage.setItem('homepage-language', language); } catch (_) {}
  }
  let language = 'en';
  try { if (localStorage.getItem('homepage-language') === 'zh-CN') language = 'zh-CN'; } catch (_) {}
  setLanguage(language);
  button.hidden = false;
  button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh-CN' : 'en'));
})();
