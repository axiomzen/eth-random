var RPG = artifacts.require("./RPG.sol");
var Random = artifacts.require("eth-random/contracts/Random.sol");

module.exports = function(deployer) {
  deployer.deploy(Random).then(function() {
    if (deployer.network == "development") {
      return deployer.deploy(RPG, Random.address);
    }
    // ELSE must use the correct random address for the correspondent network
  });
};
