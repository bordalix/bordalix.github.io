---
category: articles
date: 2005-11-16 09:52:00
layout: post
title: 'Sony DRM breaks copyright?'
---

<p>This can be Sony's worst nightmare: first, Sony decided to distribute a rootkit in there music CDs, to be installed in your PC (without your knowledge), in order to hide is DRM software; second, Mark Russinovich <a href="http://www.sysinternals.com/blog/2005/10/sony-rootkits-and-digital-rights.html">discovered</a> the existence of this rootkit, and make it public, which make people start to <a href="http://webreakstuff.com/blog/2005/11/sony-i-download-your-music/">scream at Sony</a>; third, someone took advantage of the rootkit and wrote a trojan codenamed <a href="http://www.vnunet.com/vnunet/news/2145874/virus-writers-exploit-sony-drm">Stinx-E</a>, able to hide from Windows, so impossible to be detected and cleaned; fourth, Sony decided to provide an uninstaller to allow people to erase the rootkit, but this uninstaller <a href="http://www.freedom-to-tinker.com/?p=927">raised new security holes</a>; and finally, it seems <a href="http://dewinter.com/modules.php?name=News&file=article&sid=215">Sony used some LGPL code</a>, without delivering the source, so breaking copyright:</p>

<blockquote>
  <p>It turns out that the rootkit contains pieces of code that are identical to LAME, an open source mp3-encoder, and thereby breach the license.</p>
  <p>This software is licensed under the so called Lesser Gnu Public License (LGPL). According to this license Sony must comply with a couple of demands. Amongst others, they have to indicate in a copyright notice that they make use of the software. The company must also deliver the source code to the open-source libraries or otherwise make these available. And finally, they must deliver or otherwise make available the in between form between source code and executable code, the so called object files, with which others can make comparable software.</p>
  <p>Sony complied with non of these demands, but delivered just an executable program. A computer expert, whose name is known by the redaction, discovered that the CD "Get Right With The Man" by "Van Zant" contains strings from the library version.c of Lame. This can be concluded from the string: "http://www.mp3dev.org/", "0.90", "LAME3.95", "3.95", "3.95 ".</p>
</blockquote>
