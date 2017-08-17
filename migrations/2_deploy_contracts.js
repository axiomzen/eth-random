var Random = artifacts.require("./Random.sol");
var RandomTestWrapper = artifacts.require("./RandomTestWrapper.sol")

module.exports = function(deployer) {
  deployer.deploy(Random).then(function() {
    if (deployer.network == 'development') {
      return deployer.deploy(RandomTestWrapper, Random.address);
    }
  });
};
