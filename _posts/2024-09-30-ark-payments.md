---
category: articles
date: 2024-09-30 04:20:00
extended: true
layout: post
tags: [bitcoin, ark]
title: 'Ark payments'
---

Let me start with an analogy:

On mainnet, when Alice wants to send to Bob, she has 2 options:

1. Sign transaction and broadcast it (Bob will find it on mempool)
2. Sign transaction and send it to Bob (Bob can broadcast it immediately or later)

Let’s call it <u>Send</u> and <u>Send Async</u> respectively.

<!--more-->

In Ark there also 2 options for Alice (assuming Alice already has a VTXO).

**Send:**

- Alice asks the ASP to pay Bob
- ASP waits for other payment intentions
- ASP prepares a new **round tx** with a new VTXO belonging to Bob and shows it to Alice
- Alice signs a **forfeit tx** using a **round tx** output as input (making it atomic)
- Alice needs to be online during the round
- ASP liquidity is required immediately

**Send Async (or Out-Of-Round):**

- Alice prepares a **redeem tx** (spends Alice's VTXO into a Bob's VTXO)
- Alice ask the ASP to co-sign the **redeem tx**
- Alice sends the **redeem tx** to Bob (it doesn’t matter how)
- Bob can use this **redeem tx** to join a round now or later (up until Alice’s VTXO validity)
- Alice doesn’t need to be online during the round
- ASP liquidity is required later (only when Bob joins the round)
- Up until joining the round, Bob is trusting Alice + ASP don’t collude to double spend him

For a more detailed explanation, check [Payments](https://arkdev.info/docs/learn/payments) and [Out-of-Round Payments](https://arkdev.info/docs/learn/payments-oor) on [arkdev.info](https://arkdev.info)

Related: [Ark explainer](/labs/ark/)
