---
category: articles
date: 2023-07-10 11:27:38
extended: true
layout: post
tags: [bitcoin, difficulty, pow]
title: 'Maximum target hash'
---

Do you know which Bitcoin constant is this?

26,959,535,291,011,309,493,156,476,344,723,991,336,010,898,738,574,164,086,137,773,096,960

Maybe in its hexadecimal format?

0x00000000FFFF0000000000000000000000000000000000000000000000000000

Yes, it's the maximum target hash.

But what thus it means, and why this “weird” value?

<!--more-->

Bitcoin’s protocol wants blocks mined every 10 minutes (on average), but the number of miners doing it varies along the time. The protocol adjusts to this hash power variation by increasing or decreasing the difficulty to mine a block.

This adjustment is made every 2016 blocks (~2 weeks), by multiplying the current difficulty with the ratio of expected time / actual time it took to mine the previous 2016 blocks.

For example, if the last 2016 took 18144 minutes (instead of 20160), the ratio would be 1.1 and the new difficulty would be 1.1 times the previous difficulty:

new difficulty = difficulty \* ( 20160 / 18144)

To reflect difficulty in the process of mining, a new value is calculated from the difficulty value (the target hash) and block headers must be equal or below this target hash. Since block headers are found by trial and error, the lower the target hash, the harder it is to find a valid block header.

The target hash is calculated and written to the block header:

target hash = maximum target hash / difficulty

So, we now reached the maximum target, a Bitcoin constant with the value of 0x00000000FFFF0000000000000000000000000000000000000000000000000000

Now, why 0x00000000FFFF00…00? Why not 0xFF…FF?

If you are Satoshi, and you are about to launch the genesis block, you have two things to consider:

1. What will be the difficulty of block 0? Well, logic says it should be the easiest block of all, so it should have the minimum value possible, 1.

2. How to make sure that my computer will take about 10 minutes to mine the next blocks? After all, you are pretty sure you will be alone doing this for a while.

If you put a maximum target of 0xFF..FF, and difficulty at 1, using the above formula, you’ll have a target hash of 0xFF..FF, which means that EVERY block will be a valid block, which means that your computer will generate thousands of blocks in a few seconds.

The difficulty adjustment would kick in every 2016 blocks, but since the difficulty adjustment it’s limited to a variation by a factor of 4 (4 > ratio > 0.25), it would take some time adjusting and we would end up with thousands of empty blocks.

To prevent this, you’ll need to calculate the hash power of your computer and then define the maximum target in order to have it mining blocks every 10 minutes on average.

And it seems 0x00000000FFFF00…00 was the number.
