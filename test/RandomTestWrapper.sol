pragma solidity ^0.4.4;

import { Random } from "../contracts/Random.sol";

contract RandomTestWrapper {
  Random random;


  event TestRandom(uint64 random);


  function setRandom(address deployed) public {
    random = Random(deployed);
  }


  function produceRandom(uint64 upper) public returns (uint64) {
    uint64 rand = random.random(upper);
    TestRandom(rand);
    return rand;
  }
}
