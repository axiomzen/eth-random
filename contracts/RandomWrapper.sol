pragma solidity ^0.4.4;

import { Random } from "./Random.sol";

// Only used for testing
contract RandomWrapper {
  Random random;
  uint64 public output = 0;


  function RandomWrapper(address randomContractAddress) {
    random = Random(randomContractAddress);
  }


  function produceRandom(uint64 upper) public returns (uint64) {
    uint64 rand = random.random(upper);
    output = rand;
    return rand;
  }
}
