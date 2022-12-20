document.addEventListener('DOMContentLoaded', function () {
  if ('speechSynthesis' in window) {
    document.querySelectorAll('article.post').forEach(function (post) {
      post.querySelector('span.listen').addEventListener('click', () => {
        const text = post.querySelector('div.content').innerText
        if (text.length > 32_767) {
          post.querySelector('span.listen').innerText = 'error';
          return;
        }
        const toSpeech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(toSpeech);
        post.querySelector(`span.listen`).style.display = "none"
        post.querySelector(`span.stop`).style.display = "inline"
      })
      post.querySelector('span.stop').addEventListener('click', () => {
        window.speechSynthesis.cancel();
        post.querySelector(`span.listen`).style.display = "inline"
        post.querySelector(`span.stop`).style.display = "none"
      })
    });
  } else {
    document.querySelectorAll('span.listen').forEach((l) => {
      l.style.display = "none"
    })
  }
})