---
category: articles
date: 2006-12-04 11:29:55
layout: post
title: 'Now using FeedBurner'
---

<p>Due to the lack of good statistics about this blog RSS readers and subscribers, I decided to serve my RSS feeds (<a href="//joaobordalo.com/pages/what-is-rss">?</a>) via <a href="http://feedburner.com/">FeedBurner</a>. The problem was, how to do it without disturbing my faithful subscribers?</p>

<p><strong>The how-to:</strong></p>

<ul>
  <li>The original link is <a href="//joaobordalo.com/xml/rss20/feed.xml">//joaobordalo.com/xml/rss20/feed.xml</a>.</li>
  <li>I went to FeedBurner and create a new feed pointing to the above URL, which resulted in <a href="http://feeds.feedburner.com/JoaoBordalo">http://feeds.feedburner.com/JoaoBordalo</a></li>
  <li>Added the following lines to my .htaccess file:<br/>RewriteCond %{HTTP_USER_AGENT} !FeedBurner<br/>RewriteRule ^xml/rss20/feed\.xml$ http://feeds\.feedburner\.com/JoaoBordalo [R,L]</li>
</ul>

<p>Done. If you have any problems with my 'new' RSS feed, please let me know, by leaving a comment.</p>
