---
category: articles
date: 2023-07-13 11:27:38
layout: post
tags: [bitcoin, difficulty, pow]
title: 'Explaining SIGHASH'
---

Each signature has two flags appended at the end:

SIGHASH, which **outputs** were committed to this signature:

- ALL (0x01) = all outputs
- NONE (0x02) = none ouput
- SINGLE (0x03) = only the output with same index as this input.

ANYONECANPAY, which **inputs** were committed to this signature:

- False (0x00) = all inputs
- True (0x80) = only this input

Using both flags in conjunction we get 6 possibilities:

<img src="/images/static/blog/sighash.jpeg">
