# Random for Solidity
An Ethereum contract for generating pseudo-random numbers.


## Usage

### Step 0: Locating the contract
The Ethereum contract can be found at the address: `TODO: Add deployed address`.

If you intend to use Random in a local test network you can do so by either deploying [the source](./contracts/Random.sol) or the byte code (run `truffle compile` then grab byte code from build).

### Step 1: Add random protocol

In order to interact with random in a convenient manner, we'll create a contract that declares the types of random we wish to use. (Note: see [here](`TODO: add link to types of random doc`))



``` Solidity
contract RandomAPI {
  function random(uint64 upper) public returns (uint64 randomNumber);
}
```

### Step 2: Initialize random

Once you've located the contract's address and have an API, you can initialize the API with the address.

``` Solidity
import { RandomAPI } from "RandomAPI.sol";

contract Foo {
  RandomAPI api = RandomAPI(/* Add address here */);
}
```

### Step 3: Use random

Now that we have our variable initialized, we can use it wherever we want the joy of randomness!

``` Solidity
import { RandomAPI } from "RandomAPI.sol";

contract Foo {
  RandomAPI api = RandomAPI(/* Add address here */);

  function favouriteNumber() returns (uint64) {
    return api.random(2**64 - 1);
  }
}
```


## Approach

Our approach is simple:

<img src="http://i.imgur.com/n6dFbpv.png" alt="HASH ALL THE THINGS!" width="400" height="300">

Entropy is hard, entropy on Ethereum is even harder. The true strength of having a global random contract is that the more users use our contract the more entropy we can gather.

// TODO: rewrite the above


## Statistics

### 0-9
#### 208 runs
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


### 0 - 10000
#### 150 runs
All occurrences were unique

## Contributing

- Ensure the task you're completing has an issue and and has no assignee
- Before beginning work on a task, assign yourself to the task
- Fork the repo
- Complete task on your Fork
- Create PR
- Get PR reviewed (you may be asked for changes, if so, implement them in the same PR)
- PR will be merged by maintainers!
