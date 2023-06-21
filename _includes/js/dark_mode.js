document.querySelector('body').classList.remove('no-js')
document.querySelector('body').classList.add('has-js')
// select the button
const btn = document.querySelector('.dark-theme-toggle')
// Check for dark mode preference at the OS level
const OSDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
// select the theme preference from localStorage
const choice = localStorage.getItem('theme')

// default theme is light
// if user had previously made a choice, use that choice
// if not, check if OS is in dark mode
if (choice === 'dark' || (!choice && OSDarkScheme.matches)) {
  document.body.classList.add('dark-theme')
}

btn.addEventListener('click', function () {
  // toggle class dark-theme
  document.body.classList.toggle('dark-theme')
  // change box opacity and save theme to local storage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})
