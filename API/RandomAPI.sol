pragma solidity ^0.4.4;

contract RandomAPI {
  function random(uint256 upper) public returns (uint256 randomNumber);
  function random16() public returns(uint16[16]);
}
