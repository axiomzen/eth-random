var Random = artifacts.require("./Random.sol");
var RandomWrapper = artifacts.require("./RandomWrapper.sol")

module.exports = function(deployer) {
  deployer.deploy(Random).then(function() {
    if (deployer.network == 'development') {
      return deployer.deploy(RandomWrapper, Random.address);
    }
  });
};
