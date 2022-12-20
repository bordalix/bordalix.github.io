---
category: articles
date: 2020-03-02 11:09:38
extended: true
layout: post
title: "Explain Bitcoin like I’m 10"
---

<p>
  <strong>How can I buy Bitcoin?</strong><br />
  Generate a password, and then pay someone to send bitcoins to that password.
</p>
<p>
  <strong>A password?! That's it?</strong><br />
  Yep, that's it.
</p>

<!--more-->
<p>
  <strong>What do you mean with "send to a password"?</strong><br />
  It means those bitcoins now belong to the owner of that password.
</p>
<p>
  <strong>What if someone finds my password?</strong><br />
  Then he will be able to spend your bitcoins.
</p>
<p>
  <strong>How hard will it be to try all possible passwords to check if they have bitcoins?</strong><br />
  Really hard, it would take hundreds of thousands of years to do it. There are a lot of different possible passwords available. If you choose your password at random - and don’t use your birthday - you're safe.
</p>
<p>
  <strong>How many different possible passwords are there?</strong><br />
  Almost 2^256, or in numbers you understand, 115,792,089,237,316,195,423,570,985,008,687,907,852,837,564,279,074,904,382,605,163,141,518,161,494,336. That's higher than the number of atoms in the perceived universe.
</p>
<p>
  <strong>But wait, you told me that to get some bitcoins, I had to pay someone for him to send his bitcoins to my password. So, he must know my password, right?</strong><br />
  No, absolutely not. Bitcoin uses mathematics to transform your password (also known as a private key) into a public key. These two keys are related, but totally different. It's really easy to get a public key from a private key. But it's impossible to guess a private key from his public key. So what you do is ask that guy to send his bitcoin to your public key, instead of your private key, thus keeping it secret.
</p>
<p>
  <strong>Send to the public key?! But if it's public, everyone will know about it! How are my bitcoins secured then?</strong><br />
  Because you asked that guy to send the bitcoins not to the public key itself, but to a script.
</p>
<p>
  <strong>A script? What is that?</strong><br />
  Imagine your public key as a word. One can say "These bitcoins now belong to these public key X". But with Bitcoin script, we can build sentences. So, instead, we can say "These bitcoins now belong to <strong>who proofs to own the private key where its public key is the same as this public key X</strong>". That sentence in bold is what we call the <i>unlocking script</i>.
</p>
<p>
  <strong>Sentences instead of words? That sounds interesting.</strong><br />
  Yes, it is. There are different sentences in use nowadays in Bitcoin, but I will explain this to you when you're 11. For the meantime, let's stay with the basics: a) you need a password, or as you now know, a pair of keys (public and private), b) you pay someone to send his bitcoins to your public key, and c) you don't need to show him the private key. Only the script and your public key are recorded, in what is called a <i>transaction</i>.
</p>
<p>
  <strong>So a transaction happens when some bitcoins change ownership?</strong><br />
  Exactly. A transaction has two parts: inputs and outputs. Input are all the bitcoins entering the transaction. These bitcoins will change ownership. Remember, the owner has to prove he owns these bitcoins, by satisfying the unlocking script. The output defines the new ownership of the bitcoins referenced in the input.
</p>
<p>
  <strong>We can have more than one input and more than one output? Why?</strong><br />
  Imagine you have 2 private keys, each "owning" 5 bitcoins. You want to buy something that costs 7 bitcoins. You create a transaction with those 2 private keys on the input, which gives you 10 bitcoins in total. On the output, you define that 7 will belong to the public key of the seller, and 3 to your public key again (it's your change).
</p>
<p>
  <strong>But now everyone can see that my bitcoins belong to this public key. Is that ok?</strong><br />
  If you use the same public key for every bitcoin you receive, people will know that they belong to the same person. So you should generate a new pair of keys for every bitcoin you receive. Even the public key for your change should be different.
</p>
<p>
  <strong>A new password for every bitcoin I receive? That's a nightmare!</strong><br />
  No it isn't, if you use a Bitcoin wallet to manage all your passwords.
</p>
<p>
  <strong>A wallet? What's that?</strong><br />
  You know what a browser is, right?
</p>
<p>
  <strong>Yeah, it allows me to access the World Wide Web.</strong><br />
  Exactly, and a Bitcoin wallet it's just like a browser, but to access the Bitcoin network.
</p>
<p>
  <strong>So, my bitcoins are stored in that wallet?</strong><br />
  Not your bitcoins, your passwords. Your bitcoins are registered on the network as belonging to your passwords, so you just need to take care of your passwords.
</p>
<p>
  <strong>So, if I lose my wallet, and so my passwords, I lose my bitcoins?</strong><br />
  Yeah. That's why it is so important to backup your passwords.
</p>
<p>
  <strong>But with a new password for every time someone sends me bitcoins, there are always new passwords being generated. How can I backup something that's always changing?</strong><br />
  Because in Bitcoin there's a concept of a super master password. If you backup that, you'll be able to access all your used (and future) passwords. This super master password is called a <i>seed phrase</i>.
</p>
<p>
  <strong>Future passwords? Really?</strong><br />
  That's the beauty of Elliptic Curve Cryptography. But I will explain that to you when you're 12.
</p>
<p>
  <strong>What if my wallet app disappears? Like if the company which made the app go bankrupt?</strong><br />
  You just install another wallet and add the seed phrase to it. The new wallet will then be able to know all your passwords, and will be able to scan the network and find your bitcoins there.
</p>
<p>
  <strong>But where do wallets see this? Where is that information recorded?</strong><br />
  In a database, or how we call it, a <i>ledger</i>.
</p>
<p>
  <strong>A database? What's that?</strong><br />
  It's a place where information is stored. You know that Google spreadsheet where I keep your school grades? The one I share with you and your mother? That's a database. Imagine that there's a Google spreadsheet where every transaction is recorded. Imagine that anyone in the world could read that Google spreadsheet. Anyone, with no restrictions. But no one could edit it.
</p>
<p>
  <strong>Yeah, like tweeting the public link of the spreadsheet.</strong><br />
  Exactly, everyone could read all the sheets from the spreadsheet and verify all transactions.
</p>
<p>
  <strong>Verify all transactions?</strong><br />
  Yeah, all transactions must be registered in this spreadsheet and can be validated. And you should validate all transactions, to be sure you don't have a fake spreadsheet. You want to be sure the transaction changing ownership of the bitcoins to you is there. Before sending the money. For this to work the spreadsheet must be non editable.
</p>
<p>
  <strong>That's ok, no one can edit the spreadsheet, they only have read access.</strong><br />
  Except of course, for the owner of the spreadsheet. The one who sent the link initially. He can do whatever he wants with it.
</p>
<p>
  <strong>The owner? I forgot about him. But, in that case, we have to trust him to be honest?</strong><br />
  No, we don't. Bitcoin solved the problem by not having an owner, and by distributing the ledger. There is not one, but more than 100.000 copies of the ledger distributed around the world. These copies run in computers we call <i>nodes</i>.
</p>
<p>
  <strong>So nodes maintain copies of the ledger around the world?</strong><br />
  Yes, and they validate transactions.
</p>
<p>
  <strong>How do they know they have the correct spreadsheet?</strong><br />
  Because all transactions are valid, and no one can change what's written there.
</p>
<p>
  <strong>No one can write to it? How come?</strong><br />
  I didn't say no one can write to it, I said no one can change what's written there. Pay attention please.
</p>
<p>
  <strong>Hu? What's the difference?</strong><br />
  Well, you cannot change what's written there, but you can add information there. Like with your school grades spreadsheet. Do you know how your school grade spreadsheet has several sheets?
</p>
<p>
  <strong>Yes, one for each school period.</strong><br />
  Exactly. After I enter your grades, I don't need to change them. They will not change. And in the next period, I just add a new sheet to the spreadsheet with the new grades. Without touching the previous sheets.
</p>
<p>
  <strong>So, you can never change anything, but you can always add information on top?</strong><br />
  Clever boy.
</p>
<p>
  <strong>Why is that important?</strong><br />
  Because after a transaction is stored in a new sheet, it cannot be changed. Imagine the guy you pay for your bitcoins afterwards changes the transaction to another public key. You no longer control/own those bitcoins, and you lost your money. It's of paramount importance the immutability of the spreadsheet.
</p>
<p>
  <strong>So, will my transaction appear in a new sheet in this spreadsheet?</strong><br />
  Yes, sooner or later.
</p>
<p>
  <strong>Sooner or later? How come?</strong><br />
  Well, someone needs to write the new sheet, right? But who? To solve this, Bitcoin runs a lottery every 10 minutes. Whoever wins it gains the right to add a new sheet to the spreadsheet. So, your transaction will only appear after this lottery finishes. And even then, it may not see it in the new sheet. If there are a lot of transactions waiting to be included in a sheet, you will have to wait.
</p>
<p>
  <strong>Why aren't all new transactions in the new sheet?</strong><br />
  Because sheets have a limit in size. If there are too many transactions to be included, a selection must be made. The winner of the lottery is free to choose which transactions he wants to include in the new sheet. You know, we should start calling these sheets <i>blocks</i>, that's their real names.
</p>
<p>
  <strong>Can't we bribe the lottery winner?</strong><br />
  Bribery? What do they teach you in school nowadays?
</p>
<p>
  <strong>...</strong><br />
  Actually, we can, and it's quite easy. When you define a transaction, you can define your output inferior to your input. This way, you are telling the lottery winner he can keep the difference. Of course, lottery winners will choose those transactions with a higher difference.
</p>
<p>
  <strong>How are new bitcoins generated?</strong><br />
  In this 10 minute lottery. The winner also gains some bitcoins as a prize, and this it's the only way new bitcoins are born.
</p>
<p>
  <strong>So, every 10 minutes some bitcoins are born?</strong><br />
  Yes. It’s called the <i>block subsidy</i>, and these new bitcoins belong to the lottery winner. When Bitcoin started, the block subsidy was 50 bitcoins. Every 210.000 blocks (more or less 4 years) this block subsidy is cut in half. Nowadays the block subsidy is 6.25 bitcoins, and in 2024 it will be cut to 3.125 bitcoins.
</p>
<p>
  <strong>So, how many bitcoins will ever be generated?</strong><br />
  Almost 21 millions.
</p>
<p>
  <strong>That’s it? 21 millions?</strong><br />
  Yes, 21 millions in round numbers, no more no less.
</p>
<p>
  <strong>And why 21 million?</strong><br />
  Nobody knows. Satoshi Nakamoto, the guy who invented this, decided it. It was easy to get any other number. If for instance he wanted to be 42 millions, all was needed was to start with a block subsidy of 100 bitcoins instead of 50. Or if he wanted it to be 16 millions, just halved the block subsidy every 160.000 blocks instead of 210.000. The truth is, nobody really knows.
</p>
<p>
  <strong>Can’t we ask him?</strong><br />
  Nopes. He disappeared shortly after announcing Bitcoin.
</p>


