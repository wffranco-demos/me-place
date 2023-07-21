class DarkMode {
  static get enabled() {
    const mode = localStorage.getItem('mode');
    return mode === 'dark' || (mode !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  static get mode() {
    const mode = localStorage.getItem('mode');
    return mode === 'dark' || mode === 'light' ? mode : 'pc';
  }
  static toggle() {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') localStorage.setItem('mode', 'light');
    else if (mode === 'light') localStorage.removeItem('mode');
    else localStorage.setItem('mode', 'dark');
    return DarkMode.enabled;
  }
}

document.documentElement.classList.toggle("dark", DarkMode.enabled);
