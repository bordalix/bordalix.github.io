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
- NONE (0x02) = none output
- SINGLE (0x03) = only the output with same index as this input.

ANYONECANPAY, which **inputs** were committed to this signature:

- False (0x00) = all inputs
- True (0x80) = only this input

Using both flags in conjunction we get 6 possibilities:

<a href="/images/static/blog/sighash.jpeg">
  <img class="has-border" src="/images/static/blog/sighash.jpeg">
</a>

**SIGHASH_DEFAULT:**

[BIP-341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki) (Taproot) introduces a new flag, SIGHASH_DEFAULT (0x00), that works like SIGHASH_ALL but spares one byte on the signature (64 instead of 65 bytes).
