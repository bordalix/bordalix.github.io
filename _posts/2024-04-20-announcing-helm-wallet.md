---
category: articles
date: 2024-04-20 04:20:00
extended: true
layout: post
tags: [bitcoin, liquid, lightning, wallet]
title: 'Helm wallet'
---

Announcing my latest pet project, Helm Wallet.

I believe there’s a huge gap between the ease of use of Wallet of Satoshi and the self-custody of Phoenix. To minimize this gap, I created a new web app, a wallet that has the self-custody of Phoenix and is easy to use as WoS.

Helm is a Liquid wallet that uses Boltz submarine swaps to disguise itself as a Lightning wallet that even your grandma can use.

But it has a cost.

<!--more-->

All transactions must go on the Liquid chain and also Boltz must earn something for the service they provide, so there are fees to be paid:

- The minimum cost for sending a payment is around 200 sats;
- The average cost for sending **or receiving** a payment is around 400 sats plus 0.1% of the amount;
- Transactions between Helm wallets don’t pay Boltz fees but can take up to 1 minute to complete;
- Amounts are limited between 1.000 and 25.000.000 sats.

You can try it (testnet if you want) on [https://helm-wallet.pages.dev/](https://helm-wallet.pages.dev/)

Code is available at [https://github.com/bordalix/helm-wallet/](https://github.com/bordalix/helm-wallet/)

The web app is completely independent, no server required. You can clone it, build it and run it from your own computer. Everything runs on the browser.

Critics and suggestions are welcome.
