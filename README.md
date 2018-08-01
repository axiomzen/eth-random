# RNG on Ethereum blockchain

Obtaining a reliable source of randomness on Ethereum is no easy task. The best pattern we chose to ultimately implement on CryptoKitties is known as commit-reveal.

The main constraints we conformed to are:

1. Get an arbitrary amount of random numbers per block
1. Run cheaply
2. Be unpredictable and not manipulable

At the time a kitty gets pregnant we know from which block it will be able to be born, let's call the block height _DDB_. Therefore we save DDB to the kitty struct at time of pregnancy. Then after DDB is achieved, a birther will call the give birth function, which is roughly: `R = uint256(keccak256(DDB-1))` [1].

For Cryptokitties purposes, other elements go into this hash as well, BUT it's important that any elements that go into that hashing are unable to be changed.

Then R can be [bitsliced](https://gist.github.com/flockonus/cb75838d78cf544744e7ac95ab3ec431) to make power of 2 numbers that make random slices of it [2]. If more random numbers are necessary, it's possible to continually re-hash R and obtain equaly strong random numbers.

[1] **Can only get the last 256 block hashes**, otherwise it will return 0, which sucks. Cryptokitties implement 2 fallbacks: first an economic measure, anyone is able to give birth to kitties and get an Ether reward for that. The second one is to check if R==0, and (loosely speaking) add 256 until we get a R != 0.

[2] **May use [a bit slicing function](https://gist.github.com/flockonus/cb75838d78cf544744e7ac95ab3ec431)** and keep an index of how many bits have been used so far as a variable that you increment.

## Analysis

In addition to good quality of number generation, several concerns play when harvesting random numbers from blockchains, so let's address the main points.

### Predictability

Since the block hash in the future is unknown, it's unpredictable at the time of commit.

### User manipulation

No user should be able to seed or tamper with the RNG input. As we discussed in item [1] above, counter measures must be in place to prevent "re-rolls".

### Miner manipulation

Miners are a powerful force in every aspect that comes into play when creating a block, because well, they create the blocks. Block hashes happen to be the hardest element to meddle with due to how PoW functions, miners are lucky to mine a block and get it's reward, by essentially finding a fitting hash, and if a miner is to keep on re-hashing the block until it's satisfied with the hashing result, it will end up failing to be the winner for that block height, as other miners will propose a block before them.

Given the current state of the protocol, the described RNG method seems safe, WHEN the possible reward from the RNG result is not big enough to get the strongest miners to collude.

With Casper PoS changes in 2020, RNG methods that rely on blockhash entropy might become more easily exploitable.

## Low cost

This technique gas cost is pretty low. The most costly element requires the cost of 1 update in an existing storage word, and that would happen anyways as kitties get pregnant. Hashing and bit manipulation operations are not expensive.

## Links of interest:

1. [@Razor talk on the topic](https://raz0r.name/talks/predicting-random-numbers-in-ethereum-smart-contracts/)
1. [Consensys Smart contract recommendations](https://consensys.github.io/smart-contract-best-practices/recommendations/#gameability)
1. [A multi input based random generation](https://github.com/randao/randao)


## Contributing

PR > new issue. Welcome pull requests that:

1. Improve the quality of the information
1. Adds an example in solidity [#8](https://github.com/axiomzen/eth-random/issues/8)
1. Adds links of interest
