pragma solidity ^0.4.4;

contract Random {
  uint64 _seed = 0;

  // return a pseudo random number between lower and upper bounds
  // given the number of previous blocks it should hash.
  function random(uint64 upper) public view returns (uint64 randomNumber) {
    return uint64(keccak256(keccak256(block.blockhash(block.number), _seed), now)) % upper;
  }
}
