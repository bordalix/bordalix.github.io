// select the button
const btn = document.querySelector('.dark-theme-toggle');
// select the theme preference from localStorage
const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
  document.body.classList.add('dark-theme');
  document.documentElement.style.setProperty('--box-opacity', 0.6);
  document.documentElement.style.setProperty('--my-blue', '#2280c3');
}

btn.addEventListener('click', function() {
  // toggle class dark-theme
  document.body.classList.toggle('dark-theme');
  // change box opacity and save theme to local storage
  if (document.body.classList.contains("dark-theme")) {
    document.documentElement.style.setProperty('--box-opacity', 0.6);
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.style.setProperty('--box-opacity', 1);
    localStorage.setItem('theme', 'light');
  }
  // reload page if Covid, to allow highcharts to adjust
  if (window.location.pathname.match(/covid/)) window.location.reload();
});
