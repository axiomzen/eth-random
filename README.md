# Random for Solidity
An Ethereum contract for generating pseudo-random numbers.


## Usage

### Step 0: Locating the contract
The Ethereum contract can be found at the address: `TODO: Add deployed address`.

If you intend to use Random in a local test network you can do so by either deploying [the source](./contracts/Random.sol) or [the byte code.](`TODO: add link to byte code`)

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


## Intention

## Statistics

## Contributing
