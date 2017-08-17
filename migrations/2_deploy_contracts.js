var Random = artifacts.require("./Random.sol");
var RandomTestWrapper = artifacts.require("./RandomTestWrapper.sol")

module.exports = function(deployer) {
  deployer.deploy(Random);
  if (deployer.network == 'development') {
    deployer.deploy(RandomTestWrapper);
  }
};


// var Random = artifacts.require("./Random.sol");
// var RandomTestWrapper = artifacts.require("./RandomTestWrapper.sol")
//
// module.exports = function(deployer) {
//   console.log('a');
//   deployer.deploy(Random).then(function(random) {
//     console.log('a');
//     if (deployer.network == 'development') {
//       console.log('a');
//       deployer.deploy(RandomTestWrapper).then(function(test) {
//         console.log('a');
//         test.setRandom(random);
//         deployer.link(Random, RandomTestWrapper)
//         console.log('a');
//       });
//     }
//   });
// };
