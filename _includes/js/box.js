document.addEventListener('DOMContentLoaded', function () {
  // sets the background image based on supported format
  function setBackgroundImage(box, format) {
    var url = '/images/static/portfolio/'
    var src = box.getAttribute('data-bg-image')
    src = url + src + '.' + format
    box.style.backgroundImage = 'url(' + src + ')'
  }
  // check for image format support and set it
  function changeBackgroundImage(box, index = 0) {
    var formats = ['avif', 'webp', 'png']
    var format = formats[index]
    if (format === 'png') {
      // default format
      setBackgroundImage(box, 'png')
    } else {
      var image = new Image()
      image.onload = image.onerror = function () {
        if (image.height === 2) {
          setBackgroundImage(box, format)
        } else {
          index += 1 // error, try next format
          changeBackgroundImage(box, index)
        }
      }
      const sources = {
        avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=',
        webp: 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA',
      }
      image.src = sources[format]
    }
  }
  // because we want to show the more efficient image format
  var boxes = document.getElementsByClassName('box')
  ;[].forEach.call(boxes, function (box) {
    changeBackgroundImage(box)
  })
})
