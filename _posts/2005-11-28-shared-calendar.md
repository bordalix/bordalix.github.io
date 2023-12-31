---
category: articles
date: 2005-11-28 10:02:00
layout: post
title: 'Shared calendar'
---

<p>I'm a Mac user at home, and a Windows user at work. I have my mail on a IMAP server, so I can read it in either systems without any frills. In the iMac I use Mail.app, and in the Windows box I use Thunderbird, and everything works fine. But I have a problem with my calendar. I love the <a href="http://www.apple.com/macosx/features/ical/">iCal</a> design, and I would like to have it in my Windows box. Not only for scheduling meetings, but also for ToDo management, sharing and publishing other calendars. I went to the web and to all the sites with "web application lists" on it, but didn't find any real good web calendar application: I tryied <a href="http://planzo.com">Planzo.com</a>, but has a polluted user interface, and <a href="http://kiko.com">Kiko.com</a>, which don't work in Safari, so I had to improvise.</p>

<p>After some googling, I found <a href="http://www.yagoon.com/">Yagoon</a>, and if you take a minute to jump to their site, you will notice the resemblance with Apple iCal. For 30 bucks, this could be my best buy of the year, but wait, I can try it for 60 days, so it seems is going to be my best buy for next year. Ok, I have my iCal look-a-like in my Windows box. Now, how can I sincronize the two applications?</p>

<p>So, I went to .Mac pages for prices and conditions, but 99 dollars per year seems to much for a WebDAV server. Back to Google, I found <a href="http://icalx.com/">iCalExchange</a>, which is a free service for sharing iCal files. Ok, so now I have my "synchronizer". I tryied to publish and subscribe the same calendar from iCal and Yagoon, but I got a lot of permission errors, so I had to go for a two calendar solution.</p>

<p>I created two calendars on iCalExchange, named bonnie and clyde. iCal publishes (writes) in the bonnie calendar, and subscribes (reads) the clyde calendar. In the iCal, bonnie is coloured <font color="green">green</font> and clyde is coloured <font color="red">red</font>. This way, I know that I can change, erase or create green events, but I should not do nothing to the red ones. On the Yagoon side, it publishes to the clyde calendar (<font color="green">green</font>) and subscribes the bonnie calendar (<font color="red">red</font>), implementing the same colour code.</p>

<p>At the end, I can use two different applications in two different operating systems, having the same user interface and full syncronization (it even syncronizes ToDos). All for less than 30 dollars, and thanks to iCalExchange. Ahhh, and I can see my calendar live going directly to iCalExchange homepage. <a href="http://the.taoofmac.com">Rui,</a> feel free to use this to write a new HOWTO for your blog ;)</p>
