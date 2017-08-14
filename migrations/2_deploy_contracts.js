var Random = artifacts.require("./Random.sol");

module.exports = function(deployer) {
  deployer.deploy(Random);
};
