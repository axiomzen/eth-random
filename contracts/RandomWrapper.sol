pragma solidity ^0.4.4;

import { Random } from "./Random.sol";

// Only used for testing
contract RandomWrapper {
  Random random;
  uint256 public output = 0;
  uint16[16] public output16;

  function getOutput16() public constant returns(uint16[16]) {
      return output16;
  }


  function RandomWrapper(address randomContractAddress) {
    random = Random(randomContractAddress);
  }


  function produceRandom(uint256 upper) public returns (uint256) {
    uint256 rand = random.random(upper);
    output = rand;
    return rand;
  }

  function produceRandom16() public returns (uint16[16]) {
    output16 = random.random16();
    return output16;
  }
}
