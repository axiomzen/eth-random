pragma solidity ^0.4.18;

contract Random {
  uint256 _seed;

  // The upper bound of the number returns is 2^bits - 1
  function bitSlice(uint256 n, uint256 bits, uint256 slot) public pure returns(uint256) {
      uint256 offset = slot * bits;
      // mask is made by shifting left an offset number of times
      uint256 mask = uint256((2**bits) - 1) << offset;
      // AND n with mask, and trim to max of 5 bits
      return uint256((n & mask) >> offset);
  }

  function maxRandom() public returns (uint256 randomNumber) {
    _seed = uint256(keccak256(
        _seed,
        block.blockhash(block.number - 1),
        block.coinbase,
        block.difficulty
    ));
    return _seed;
  }

  // return a pseudo random number between lower and upper bounds
  // given the number of previous blocks it should hash.
  function random(uint256 upper) public returns (uint256 randomNumber) {
    return maxRandom() % upper;
  }
}
