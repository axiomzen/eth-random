var Random = artifacts.require("./Random.sol");
var RandomWrapper = artifacts.require("./RandomWrapper.sol");

module.exports = function(deployer) {
  console.log("network: ", deployer.network);
  deployer.deploy(Random).then(function() {
    // truffle 4 decided to call test env `develop`
    if (deployer.network == "test" || deployer.network == "develop") {
      return deployer.deploy(RandomWrapper, Random.address);
    }
  });
};
