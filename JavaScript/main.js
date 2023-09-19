function setThemeCookie(theme) {
  document.cookie = `theme=${theme}; path=/; expires=Sun, 31 Dec 2023 00:00:00 UTC;`;
}

// Function to retrieve the theme preference from the cookie
function getThemeCookie() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === 'theme') {
          return cookieValue;
      }
  }
  return null;
}

// Function to apply the selected theme
function applyTheme(theme) {
  // Logic to apply the theme (e.g., changing CSS classes or styles)
  document.documentElement.className = theme;
}

// Handle theme switcher changes
const themeSwitcher = document.querySelector('.theme-switcher');
if (themeSwitcher) {
  themeSwitcher.addEventListener('change', (event) => {
      const selectedTheme = event.target.value;
      applyTheme(selectedTheme);
      setThemeCookie(selectedTheme);
  });
}

// On page load, retrieve and apply the theme from the cookie
window.onload = function () {
  const savedTheme = getThemeCookie();
  if (savedTheme) {
      applyTheme(savedTheme);
  }
};

