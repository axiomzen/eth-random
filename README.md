# Random for Solidity (eth-random)

<a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

Eth-Random is an Ethereum contract for generating pseudo-random numbers.

Our goal - Implementing the simplest and most efficient ways to generate
a random number of arbitrary size over the Ethereum network.

The motivation for this project came from a need for a true and cheap way
to create random assets. Despite a couple of posts and comments found on the internet, we couldn't find a single common resource. However, the beauty and strength
of our approach comes from growth via developer usage! The more people using the same
contract the more the internal _seed_ value becomes unpredictable, generating stronger results.

## Caveats

Firstly, the block timestamp is not terribly unpredictable and yet it's one of the strongest sources
of entropy available in the blockchain along with contract's internal seed.

Ideally, the caller of Random function should have minimal interest in the result, nor let
interested users choose at which block the contract will be called.

If security is a main focus, it may be best to look into purchasing an oracle solution [such as oraclize](https://docs.oraclize.it/#security-deepdive-advanced-datasources-random-data-source)

# Usage

The Ethereum contract can be found at the following addresses:

### Main net
- random: `0x0230CfC895646d34538aE5b684d76Bf40a8B8B89` [etherscan](https://etherscan.io/address/0x0230CfC895646d34538aE5b684d76Bf40a8B8B89#code)

### Rinkeby (test)
- random: `0x606b7f97bFEaCDf430059e6ef8918F2BaD1EF7FD` [etherscan](https://rinkeby.etherscan.io/address/0x606b7f97bFEaCDf430059e6ef8918F2BaD1EF7FD#code)

### Ropsten (test)
- random: `0x1637140C895e01d14be5a7A42Ec2c5BB22893713` [etherscan](https://ropsten.etherscan.io/address/0x1637140c895e01d14be5a7a42ec2c5bb22893713#code)

### Using in truffle

Install with `npm install eth-random`

### Initialize and use random

Once you've located the contract's address, you can initialize the API with the address.

```solidity
import "eth-random/contracts/Random.sol";

contract Foo {
  Random api = Random(/* set address here */);

  function rollDice() returns (uint64) {
    return api.random(6);
  }
}
```

**See [a simple RPG example](./example/contracts/RPG.sol)**

## Stats

Run 10,000 on a 1,000 range, using `testrpc` on locahost [data spreadsheet](https://docs.google.com/spreadsheets/d/1pHbvrnQVrLT6R9oM-oozeI5d5uEIx-6eDhhZ8f5vkVg/edit#gid=0). Distribution:

![graph](./assets/graph.png)

average: 503.3
std deviation: 287.3

## Test

Have [truffle framework](http://truffleframework.com/) and [testrpc](https://github.com/ethereumjs/testrpc) installed and running.

`npm test`

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md)
