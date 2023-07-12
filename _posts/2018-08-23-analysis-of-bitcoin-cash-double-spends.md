---
category: articles
date: 2018-08-23 10:42:53
extended: true
layout: post
tags: [bitcoin]
title: 'Analysis of Bitcoin Cash double spends'
---

<p>
  <strong>Bitcoin Cash double spends</strong>
</p>
<p>
  Double spend is when a set of coins is spent in more than one transaction.
  This can happen for various reasons, but one of the reasons is fraud attempts.
</p>
<p>
  Bitcoin Cash accepts 0-conf payments, which I consider insecure by default.
  But I would like to have some data to support this, so I went looking.
</p>

<!--more-->
<p>Since someone developed a website for detecting double spends on the Bitcoin Cash network,
I decided to scrape it and get some numbers from it. The site in question is:</p>

<p><a href="https://doublespend.cash/">https://doublespend.cash/</a></p>

<p><strong>Numbers</strong></p>

<ul>
  <li>Date of first transaction, 2018-02-13 11:34:44 +0000</li>
  <li>Date of last transaction, 2018-08-22 06:31:53 +0100</li>
  <li>Period, 189 days </li>
  <li>Number of attempts, 387</li>
  <li>Successful double spends, 109 (28%)</li>
</ul>

<p><strong>Files</strong></p>

<p>Feel free to clone the <a href="https://github.com/bordalix/scrape_doublespend_cash">GitHub repo</a> and use it at your own will.</p>

<ul>
  <li>
    <a href="https://github.com/bordalix/scrape_doublespend_cash/blob/master/scrape.rb">scrape.rb</a>,
    a ruby script, scrapes the website and writes to a json file
  </li>
  <li>
    <a href="https://github.com/bordalix/scrape_doublespend_cash/blob/master/output.json">output.json,</a>
    file with all transactions in JSON format
  </li>
  <li>
    <a href="https://github.com/bordalix/scrape_doublespend_cash/blob/master/stats.rb">stats.rb</a>,
    parses the output.json file and delivers some stats
  </li>
</ul>
