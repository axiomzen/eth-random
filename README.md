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

Firstly, the block timestamp is not terribly unpredictable and so it's one of the strongest sources
of entropy available in any chain along with the internal seed.

Ideally, the caller of Random function should not have interest in the result, nor let
interested users choose at which block the contract will be called.

If security is a main focus over reliability, it may be best to look into purchasing oracles [such as oraclize](https://docs.oraclize.it/#security-deepdive-advanced-datasources-random-data-source)

# Usage

The Ethereum contract can be found at the following addresses:

### Main net
- random: `0x0230CfC895646d34538aE5b684d76Bf40a8B8B89` [etherscan](https://etherscan.io/address/0x0230CfC895646d34538aE5b684d76Bf40a8B8B89#code)

### Rinkeby
- random: `0x606b7f97bFEaCDf430059e6ef8918F2BaD1EF7FD` [etherscan](https://rinkeby.etherscan.io/address/0x606b7f97bFEaCDf430059e6ef8918F2BaD1EF7FD#code)

### Ropsten
- random: `0x1637140C895e01d14be5a7A42Ec2c5BB22893713` [etherscan](https://ropsten.etherscan.io/address/0x1637140c895e01d14be5a7a42ec2c5bb22893713#code)

*On a local test network:*
In a local test network, you can use random by deploying [the source](./contracts/Random.sol). After deploying the contract, locate the address it occupies.

### Step 1: Declare the random interface

You may use it with truffle (say creating a file "RandomAPI.sol") or copying into your contract.

```solidity
contract RandomAPI {
  function random(uint64 upper) public returns (uint64 randomNumber);
}
```

### Step 2: Initialize and use random

Once you've located the contract's address, you can initialize the API with the address.

```solidity
import { RandomAPI } from "RandomAPI.sol";

contract Foo {
  RandomAPI api = RandomAPI(/* Add address here */);

  function favouriteNumber() returns (uint64) {
    return api.random(10**6 - 1);
  }
}
```

We can use it wherever we want the joy of randomness!




## Statistics

### 0 - 100 000

Given 5000 runs

| Occurrences | Share |
|-------------|-------|
| 1 | 97.6% (4 880) |
| 2 | 2.38% (119) |
| 3 | 0.02% (1) |

### 0-9

Given 208 runs

|      Item      | Occurrences  |
|----------|-------------|
| 1 |      26 |
| 4 |      25 |
| 5 |      23 |
| 0 |      21 |
| 3 |      20 |
| 8 |      20 |
| 2 |      19 |
| 6 |      19 |
| 9 |      19 |
| 7 |      16 |


## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md)
