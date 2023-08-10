---
category: articles
date: 2023-07-13 11:27:38
extended: true
layout: post
tags: [bitcoin, difficulty, pow]
title: "Explaining SIGHASH"
---

Sighash, short for Signature Hash, is a concept within the Bitcoin protocol that determines which parts of a transaction are signed. It plays a crucial role in ensuring the security and integrity of the Bitcoin network.

<!--more-->

By using different Sighash types, users have control over which parts of a transaction are mutable and which are immutable when they sign it. This flexibility allows for various use cases, such as creating conditional transactions or enabling partial signatures for multi-signature transactions.

Sighash types, such as SIGHASH_ALL, SIGHASH_NONE, SIGHASH_SINGLE, and others, define different signing schemes. These schemes specify which parts of a transaction are committed to, preventing tampering while still allowing different transaction formats.

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
  <img class="has-border" src="/images/static/blog/sighash.jpeg" aria-label="sighash diagram">
</a>

**SIGHASH_DEFAULT:**

[BIP-341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki) (Taproot) introduces a new flag, SIGHASH_DEFAULT (0x00), that works like SIGHASH_ALL but spares one byte on the signature (64 instead of 65 bytes).
