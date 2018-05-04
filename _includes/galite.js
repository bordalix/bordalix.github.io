/* use local google analytics and set expire to 7d to achieve 100/100 on page insights */
/* thanks to https://github.com/jehna/ga-lite */
(function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
;c.parentNode.insertBefore(a,c)
})(window,document,"galite","script","/js/ga-lite.min.js");
galite('create', 'UA-86005-2', 'auto');
galite('send', 'pageview');