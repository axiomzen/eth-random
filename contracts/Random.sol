pragma solidity ^0.4.4;

contract Random {
  uint256 _seed = 0;

  // in practice the upper bound of the number returns is 2^bits - 1
  function _bitSlice(uint256 n, uint256 bits, uint256 slot) internal constant returns(uint256) {
      // TODO require for checking input range
      uint256 offset = slot * bits;
      // mask is made by shifting left an offset number of times
      uint256 mask = uint256((2**bits) - 1) << offset;
      // AND n with mask, and trim to max of 5 bits
      return uint256((n & mask) >> offset);
  }

  function maxRandom() public returns (uint256 randomNumber) {
    _seed = uint256(sha3(sha3(block.blockhash(block.number - 1), _seed), now));
    return _seed;
  }

  // return a pseudo random number between lower and upper bounds
  // given the number of previous blocks it should hash.
  function random(uint256 upper) public returns (uint256 randomNumber) {
    return maxRandom() % upper;
  }

  /// @dev get the 16 random uint16 integers from a single roll
  function random16() public returns(uint16[16]) {
      uint16 z = 0;
      uint256 n = maxRandom();
      uint16[16] memory arr = [z,z,z,z,z,z,z,z,z,z,z,z,z,z,z,z];
      for(uint i = 0; i < 16; i++) {
          arr[i] = uint16(_bitSlice(n, 16, i));
      }
      return arr;
  }
}
