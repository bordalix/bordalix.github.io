document.querySelector('body').classList.remove('no-js');
document.querySelector('body').classList.add('has-js');
// Create an intersection observer with default options, that
// triggers a class on/off depending on an element’s visibility
// in the viewport
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('ended');
  });
});
// Use that IntersectionObserver to observe the visibility
// of some elements
for (const element of document.querySelectorAll('.container')) {
  animationObserver.observe(element);
}
