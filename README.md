# Random for Solidity (eth-random)

An Ethereum contract for generating pseudo-random numbers.

This is our take implementing some of the simplest and efficient way to generate a random
number of arbitrary size over the Ethereum network. Some of our main goals are to make a
cheap, repeatable way to generate a secure number for creating low value assets.

We theorize the strength of this approach come from developer usage! The more people
using it makes the the _seed_ value more unpredictable.

## Caveats

Given the distributed, decentralized nature of dapps, a miner with significant hashing power has potential to influence the Random's output by manipulating the block timestamp, which is the biggest source of entropy (along the shared seed).

Also be very careful when letting users call a function that calls random, since there is
some degree of influence at the time of the call.

If you're in need of a highly secure alternative, it may be best to look into oracles [such as oraclize](https://docs.oraclize.it/#security-deepdive-advanced-datasources-random-data-source)

# Usage

### Step 0: Locating the contract

*On the Ethereum network:*
The Ethereum contract can be found at the address: `TODO: Add deployed address`.

*On a local test network:*
In a local test network, you can use random by either deploying [the source](./contracts/Random.sol) or the byte code (run `truffle compile` then grab byte code from build). After deploying the contract, locate the address it occupies.

### Step 1: Add random protocol

In order to interact with random in a convenient manner, we'll create a contract that declares the types of random we wish to use. (Note: see [here](`TODO: add link to types of random doc`))

```solidity
contract RandomAPI {
  function random(uint64 upper) public returns (uint64 randomNumber);
}
```

### Step 2: Initialize random

Once you've located the contract's address and have an API, you can initialize the API with the address.

```solidity
import { RandomAPI } from "RandomAPI.sol";

contract Foo {
  RandomAPI api = RandomAPI(/* Add address here */);
}
```

### Step 3: Use random

Now that we have our variable initialized, we can use it wherever we want the joy of randomness!

```solidity
import { RandomAPI } from "RandomAPI.sol";

contract Foo {
  RandomAPI api = RandomAPI(/* Add address here */);

  function favouriteNumber() returns (uint64) {
    return api.random(2**64 - 1);
  }
}
```

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

- Ensure the task you're completing has an issue and and has no assignee
- Before beginning work on a task, assign yourself to the task
- Fork the repo
- Complete task on your Fork
- Create PR against the branch you forked from
- Get PR reviewed (you may be asked for changes, if so, implement them in the same PR)
- PR will be merged by maintainers
