---
category: articles
date: 2006-08-04 05:53:00
layout: post
title: 'Site5, the trailing slash issue'
---

<p>Anyone with a hosting service from <a href="http://site5.com/">Site5</a> could have this problem: when you have your web application in a directory symlinked, like</p>

<pre>
  ~/public_html/webapp -> ~/apps/webapp
</pre>

<p>when accessing to the URL <i>http://yourdomain.com/webapp</i> you will have an error (Bad Request). But if you add the trailing slash to the URL, everything will work fine. After some digging in Site5 foruns, I resolved the problem by creating a file, named <i>400.shtml</i>, placed in the <i>public_html</i> directory, with the following content:</p>

<pre>
  &lt;SCRIPT LANGUAGE="JavaScript"&gt;
  &lt;!--
  window.location="&lt;!--#echo var="REQUEST_URI" --&gt;/";
  // --&gt;
  &lt;/script&gt;
</pre>

<p>Hope it helps.</p>
