pragma solidity ^0.4.4;

import { Random } from "./Random.sol";

// Only used for testing
contract RandomWrapper {
  Random random;
  uint256 public output;

  function RandomWrapper(address randomContractAddress) public {
    random = Random(randomContractAddress);
  }

  function produceRandom(uint256 upper) public returns (uint256) {
    uint256 rand = random.random(upper);
    output = rand;
    return rand;
  }
}
