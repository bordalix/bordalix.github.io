---
category: articles
date: 2007-04-24 07:33:18
layout: post
title: 'lastChild in Mozilla browsers'
---

<p>For a while now I've been receiving some complaints about the comments in this blog: people using Mozilla based browsers weren't able to see the BlindDown effect when posting comments, and since they did not receive any other message about the comment being correctly posted, they posted it several times.</p>

<p>The error message received was this:</p>

<pre>$(element).style has no properties[Break on this error] $(element).style.height = '0px';effects.js (line 369)</pre><p>After some heavy Javascript debugging, I found out the bug: Mozilla browsers add nodes for white space (in my case, in between LI elements), so it was calling the wrong node for the BlindDown effect (it was calling a white space). Here goes the original code:</p>

<pre>function commentAdded(request) {  new Effect.BlindDown($('commentList').lastChild);  $('commentform').elements[3].value = '';  $('commentform').elements[3].focus();}</pre><p>The solution was to add a new javascript line <strong>before</strong> the Effect.BlindDown call, cleaning all white spaces. Here is the corrected code:</p>

<pre>function commentAdded(request) {  Element.cleanWhitespace('commentList');  new Effect.BlindDown($('commentList').lastChild);  $('commentform').elements[3].value = '';  $('commentform').elements[3].focus();}</pre><p>So, the lesson is: every time you use a lastChild call, be aware of the white spaces for the Mozilla browsers. Hope it helps, thanks to all who pointed the bug.</p>

<p><strong>Update:</strong> after a lunch conversation, I've decided to post the bug in the Mozilla foundation bugzilla. If you want to, you can check the status by accessing <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=378593">bug #378593</a>.</p>
