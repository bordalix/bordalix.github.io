document.addEventListener('DOMContentLoaded', function () {
  var boxes = document.getElementsByClassName('box');
  [].forEach.call(boxes, function (box) {
    /* lazy load div background images */
    var src = box.getAttribute('data-bg-image');
    if (src) {
      src = 'https://cdn.joaobordalo.com/images/static/portfolio/' + src;
      Modernizr.on('webp', function (result) {
        src = src + (result ? '.webp' : '.png');
        box.style.backgroundImage = 'url(' + src + ')';
      });
    }
  });
});
