var Random = artifacts.require("./Random.sol");
var RandomTestWrapper = artifacts.require("./RandomTestWrapper.sol")

module.exports = function(deployer) {
  deployer.deploy(Random);
  if (deployer.network == 'development') {
    deployer.deploy(RandomTestWrapper);
  }
};
