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
  const navigation = [...document.querySelectorAll('nav a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navigation.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-10% 0px -60% 0px' });
    document.querySelectorAll('main section').forEach(section => observer.observe(section));
  }
})();
